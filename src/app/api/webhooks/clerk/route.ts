import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createGymOwnerInDB, deleteGymOwnerInDB } from "@/actions/db/users";
import { Provider } from "@prisma/client/edge";

export async function POST(req: Request) {
  console.log("Received webhook request");
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env"
    );
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  // Do something with payload
  // For this guide, log payload to console
  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`Received webhook with ID ${id} and event type of ${eventType}`);
  // console.log("Webhook payload:", body);

  const clerkRes = JSON.parse(body);
  console.log("first_name: clerkRes.data : ", clerkRes.data);

  if (evt.type === "user.created") {
    await createGymOwnerInDB({
      clerkId: clerkRes.data.id,
      avatar: clerkRes.data.profile_image_url,
      email: clerkRes.data.email_addresses[0].email_address,
      first_name: clerkRes.data.first_name,
      last_name: clerkRes.data.last_name,
      oauth: clerkRes.data.email_addresses[0].linked_to[0].type as Provider,
    });

    console.log("gymOwner created in DB:", clerkRes.data.id);
  }
  if (evt.type === "user.deleted") {
    await deleteGymOwnerInDB(clerkRes.data.id);

    console.log("gymOwner deleted in DB:", clerkRes.data.id);
  }

  return new Response("Webhook received", { status: 200 });
}

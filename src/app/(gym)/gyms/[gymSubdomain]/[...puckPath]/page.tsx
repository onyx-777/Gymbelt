import resolvePuckPath from "@/components/pages/gym/admin/features/website/lib/resolve-puck-path";
import { Metadata } from "next";
import Client from "./client";
import { ScrollArea } from "@/components/ui/scroll-area";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ framework: string; uuid: string; puckPath: string[] }>;
}): Promise<Metadata> {
  const { puckPath } = await params;
  const { isEdit, path } = resolvePuckPath(puckPath);

  if (isEdit) {
    return {
      title: "Editing: " + path,
    };
  }

  return {
    title: "",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ framework: string; uuid: string; puckPath: string[] }>;
}) {
  console.log("[...puckPath] page is rendering");

  const { puckPath } = await params;
  const { isEdit, path } = resolvePuckPath(puckPath);

  return (
    <>
      <ScrollArea className="h-screen">
        <Client isEdit={isEdit} path={path} />
      </ScrollArea>
    </>
  )
}

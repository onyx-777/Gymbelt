import { getAllGyms } from "@/actions/db/gym";
import { Prisma } from "@prisma/client/edge";

export type AllGyms = Prisma.PromiseReturnType<typeof getAllGyms>;

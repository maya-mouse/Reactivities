import z from "zod";
import { requiredString } from "../util/util";

export const registerShema = z.object({
    email: z.string().email(),
    displayName: requiredString("displayName"),
    password: requiredString("password")
});

export type RegisterSchema = z.infer<typeof registerShema>;
import { z } from "zod";

// data which need to be validated is title and description as other fields are default
export const createIssueSchema = z.object({
    title: z.string().min(1, "Title is required.").max(255),
    description: z.string().min(1, "Description is required."),
});

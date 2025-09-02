import { z } from "zod";

// Validation schema
export const createIssue = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

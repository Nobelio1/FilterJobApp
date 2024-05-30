import { z } from "zod";
import { JobSchema } from "../schema/job-schema";

export type Job = z.infer<typeof JobSchema>;

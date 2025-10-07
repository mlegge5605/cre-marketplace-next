import { z } from "zod";

export const Role = z.enum(["PROPERTY_MANAGER","SERVICE_PROVIDER","ADMIN"]);
export const JobCategory = z.enum(["PLUMBING","ELECTRICAL","HVAC","LANDSCAPING","SNOW","JANITORIAL","ROOFING","SECURITY","ELEVATOR","GLAZING","OTHER"]);
export const JobType = z.enum(["ONE_TIME","ONGOING"]);
export const BudgetType = z.enum(["FIXED","HOURLY","RANGE","TBD"]);
export const JobStatus = z.enum(["OPEN","UNDER_REVIEW","ACCEPTED","CONTRACT","IN_PROGRESS","COMPLETED","CANCELLED"]);
export const Visibility = z.enum(["INVITE_ONLY","OPEN_TO_MATCHED","PUBLIC_IN_RADIUS"]);
export const BidStatus = z.enum(["SUBMITTED","WITHDRAWN","REJECTED","ACCEPTED"]);
export const EventType = z.enum(["SITE_VISIT","KICKOFF","INSPECTION"]);

export const Address = z.object({
  line1: z.string(),
  city: z.string(),
  province: z.string(),
  postal: z.string(),
  country: z.string().default("CA"),
  lat: z.number().optional(),
  lng: z.number().optional(),
});

export const DynamicField = z.object({
  name: z.string(),
  type: z.enum(["string","number","boolean","select","file","file[]","text"]),
  options: z.array(z.string()).optional(),
  required: z.boolean().optional(),
});

export const CategorySchema = z.object({
  category: JobCategory,
  fields: z.array(DynamicField),
});

export const JobSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  category: JobCategory,
  status: JobStatus.default("OPEN"),
  budgetMin: z.number().int().optional(),
  budgetMax: z.number().int().optional(),
  city: z.string().optional()
});

export type CategorySchema = z.infer<typeof CategorySchema>;

import * as z from 'zod';

export const CustomerSchema = z.object({
  age: z.number().min(18),
  cpf: z.string().length(14),
  name: z.string().min(1),
  income: z.number().positive(),
  location: z.string().min(2),
});

export type Customer = z.infer<typeof CustomerSchema>;

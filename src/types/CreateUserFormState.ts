import { z } from 'zod';
import { createUserFormSchema } from '../schemas/createUserFormSchema';

// Função z.infer é usada para inferir esses tipos reais com base no esquema.
export type CreateUserFormState = z.infer<typeof createUserFormSchema>;

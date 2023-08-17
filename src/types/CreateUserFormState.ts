import { z } from 'zod';
import { createUserFormSchema } from '../schemas/createUserFormSchema';

export type CreateUserFormState = z.infer<typeof createUserFormSchema>;

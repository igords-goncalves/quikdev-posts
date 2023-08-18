import { z } from 'zod';
import { loginFormSchema } from '../schemas/createUserFormSchema';
import { registerFormSchema } from '../schemas/createUserFormSchema';

// Função z.infer é usada para inferir esses tipos reais com base no esquema.
export type LoginFormState = z.infer<typeof loginFormSchema>;
export type RegisterFormState = z.infer<typeof registerFormSchema>;

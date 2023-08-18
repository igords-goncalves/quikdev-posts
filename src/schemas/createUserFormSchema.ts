import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z.string().nonempty({ message: 'Usuário é obrigatório' }),
  password: z.string().nonempty({ message: 'Senha é obrigatória' }),
});

export const registerFormSchema = z.object({
  name: z.string().nonempty({ message: 'Nome é obrigatório' }),
  username: z.string().nonempty({ message: 'Usuário é obrigatório' }),
  password: z.string().nonempty({ message: 'Senha é obrigatória' }),
});

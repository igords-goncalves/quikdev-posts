import { z } from 'zod';

export const createUserFormSchema = z.object({
  name: z.string().nonempty({ message: 'Nome é obrigatório' }),
  username: z.string().nonempty({ message: 'Usuário é obrigatório' }),
  password: z.string().nonempty({ message: 'Senha é obrigatória' }),
});

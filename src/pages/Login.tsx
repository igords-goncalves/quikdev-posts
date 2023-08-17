import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../components/Form';
import { useForm } from 'react-hook-form';
import { handleFormSubmit } from './utils/handleFormSubmit';
import { createUserFormSchema } from '../schemas/createUserFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateUserFormState } from '../types/CreateUserFormState';

const Login: React.FC = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormState>({
    resolver: zodResolver(createUserFormSchema),
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    const username = watch('username');
    const password = watch('password');
    const route = '/posts';

    handleFormSubmit(username, password, route, navigate);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Root>
          <Form.Title>Login</Form.Title>
          <Form.Input
            name="username"
            type="text"
            label="Usuário"
            placeholder="Digite seu usuário"
            register={register('username', { required: true })}
            errors={errors.username}
          />

          <Form.Input
            name="password"
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            register={register('password', { required: true })}
            errors={errors.password}
          />
          <Form.Submit>Entrar</Form.Submit>
        </Form.Root>
      </form>
      <p className="font-medium text-sm mt-4">
        Se não possui uma conta, <Link to="register"> clique aqui</Link> criar.
      </p>
    </>
  );
};

export default Login;

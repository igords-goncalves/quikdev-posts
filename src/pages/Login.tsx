import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../components/Form';
import { useForm } from 'react-hook-form';
import { loginFormSchema } from '../schemas/createUserFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormState } from '../types/CreateUserFormState';
import { handleLogin } from '../services/auth/authServices';

import bgLeft from '../assets/bg-left.png';
import bgRight from '../assets/bg-right.png';

const Login: React.FC = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormState>({
    resolver: zodResolver(loginFormSchema),
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    const username = watch('username');
    const password = watch('password');
    const route = '/posts';

    handleLogin(username, password, route, navigate);
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

      <div className="absolute top-10 left-0 -z-10">
        <img className="opacity-5" src={bgLeft} alt="background" />
      </div>
      <div className="absolute top-10 right-0 -z-10">
        <img className="opacity-5" src={bgRight} alt="background" />
      </div>
    </>
  );
};

export default Login;

import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../components/Form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormState } from '../types/CreateUserFormState';
import { registerFormSchema } from '../schemas/createUserFormSchema';
import { handleRegister } from '../services/auth/authServices';

const Register: React.FC = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormState>({
    resolver: zodResolver(registerFormSchema),
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    const name = watch('name');
    const username = watch('username');
    const password = watch('password');
    const route = '/';

    handleRegister(name, username, password, route, navigate);
  };

  return (
    <>
      <form role="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Root>
          <Form.Title>Criar Conta</Form.Title>
          <Form.Input
            name="name"
            type="text"
            label="Nome"
            placeholder="Digite seu nome"
            register={register('name')}
            errors={errors.name}
          />
          <Form.Input
            name="username"
            type="text"
            label="Usuário"
            placeholder="Digite seu usuário"
            register={register('username')}
            errors={errors.username}
          />
          <Form.Input
            name="password"
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            register={register('password')}
            errors={errors.password}
          />
          <Form.Submit>Criar</Form.Submit>
        </Form.Root>
      </form>
      <p className="font-medium text-sm mt-4" role="navigation">
        Se já possui uma conta, <Link to="/"> clique aqui</Link> fazer{' '}
        <span lang="en">login</span>.
      </p>
    </>
  );
};

export default Register;

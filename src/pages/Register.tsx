import { Link } from 'react-router-dom';
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

  const onSubmit = () => {
    const name = watch('name');
    const username = watch('username');
    const password = watch('password');

    handleRegister(name, username, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <Form.Submit>Entrar</Form.Submit>
        </Form.Root>
      </form>
      <p className="font-medium text-sm mt-4">
        Se já possui uma conta, <Link to="/"> clique aqui</Link> fazer login.
      </p>
    </>
  );
};

export default Register;

import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../components/Form';
import { useForm } from 'react-hook-form';
import { handleFormSubmit } from './utils/handleFormSubmit';

const Login: React.FC = () => {
  const { register, watch, handleSubmit } = useForm();

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
          />
          <Form.Input
            name="password"
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            register={register('password', { required: true })}
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

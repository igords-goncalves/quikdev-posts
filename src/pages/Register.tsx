import { Link } from 'react-router-dom';
import { Form } from '../components/Form';
import { useForm } from 'react-hook-form';
import { handleFormRegister } from './utils/handleFormRegister';

const Register: React.FC = () => {
  const { register, watch, handleSubmit } = useForm();

  console.log(watch('name'));

  const onSubmit = () => {
    const name = watch('name');
    const username = watch('username');
    const password = watch('password');

    handleFormRegister(name, username, password);
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
            register={register('name', { required: true })}
          />
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
        Se já possui uma conta, <Link to="/"> clique aqui</Link> fazer login.
      </p>
    </>
  );
};

export default Register;

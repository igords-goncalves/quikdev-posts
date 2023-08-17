import FakerApi from '../../services/api/fakerApi';

const fakeApi = new FakerApi();

/**
 * Função para lidar com o submit de formulários de registro
 */
export const handleFormRegister = async (
  name: string,
  username: string,
  password: string,
) => {
  try {
    const response: any = await fakeApi.post('/register', {
      name,
      username,
      password,
    });
    if (response.success) {
      console.log('Login success:', response.message);
    } else {
      console.error('Login failed:', response.message);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

import FakerApi from '../../services/api/fakerApi';

const fakeApi = new FakerApi();

export const handleFormRegister = async (
  name: string,
  username: string,
  password: string,
) => {
  // Se necessario adicione um e.preventDefault() para evitar o reload da pagina
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

import { NavigateFunction } from 'react-router-dom';
import FakerApi from '../../services/api/fakerApi';

const fakeApi = new FakerApi();

export const handleFormSubmit = async (
  username: string,
  password: string,
  route: string,
  navigate: NavigateFunction,
) => {
  try {
    const response: any = await fakeApi.post('/login', {
      username,
      password,
    });
    if (response.success) {
      navigate(route);
    } else {
      console.error('Login failed:', response.message);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

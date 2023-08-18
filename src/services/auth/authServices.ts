import { NavigateFunction } from 'react-router-dom';
import FakerApi from '../api/fakerApi';

const fakeApi = new FakerApi();

export const handleLogin = async (
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

export const handleRegister = async (
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

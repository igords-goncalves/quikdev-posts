import { NavigateFunction } from 'react-router-dom';
import FakerApi from '../api/fakerApi';
import { toast } from 'react-toastify';

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
      toast.success(response.message);
    }
  } catch (error: unknown | any) {
    toast.error(error.message);
  }
};

export const handleRegister = async (
  name: string,
  username: string,
  password: string,
  route: string,
  navigate: NavigateFunction,
) => {
  try {
    const response: any = await fakeApi.post('/register', {
      name,
      username,
      password,
    });
    if (response.success) {
      navigate(route);
      toast.success(response.message);
    }
  } catch (error: unknown | any) {
    toast.error(error.message);
  }
};

export const handleLogout = async (navigate: NavigateFunction) => {
  try {
    const response: any = await fakeApi.post('/logout', {});
    if (response.success) {
      toast.warning(response.message);
      navigate('/');
    }
  } catch (error: unknown | any) {
    toast.error(error.message);
  }
};

export const getUserLogged = async () => {
  try {
    const response: any = await fakeApi.get('/me', {});
    if (response.success) {
      return response.data;
    }
  } catch (error: unknown | any) {
    toast.error(error.message);
  }
};

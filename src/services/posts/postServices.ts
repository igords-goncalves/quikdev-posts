import FakerApi from '../api/fakerApi';
import { toast } from 'react-toastify';

const fakeApi = new FakerApi();

export const getPost = async () => {
  try {
    const response: any = await fakeApi.get('/posts', {});
    if (response.success) {
      return response.data;
    }
  } catch (error: unknown | any) {
    toast.error(error.message);
  }
};

export const createPost = async (title: string, content: string) => {
  try {
    const response: any = await fakeApi.post('/posts/create', {
      title,
      content,
    });
    if (response.success) {
      toast.success(response.message);
    }
  } catch (error: unknown | any) {
    toast.error(error.message);
  }
};

export const removePost = async (post_id: number) => {
  try {
    const response: any = await fakeApi.delete('/posts/remove', { post_id });
    if (response.success) {
      toast.success(response.message);
    }
  } catch (error: unknown | any) {
    toast.error(error.message);
  }
};

export const editPost = async (
  post_id: number,
  post: { title: string; content: string },
) => {
  try {
    const response: any = await fakeApi.put('/posts/update', { post_id, post });
    if (response.success) {
      toast.success(response.message);
    }
  } catch (error: unknown | any) {
    toast.error(error.message);
  }
};

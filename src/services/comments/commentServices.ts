import FakerApi from '../api/fakerApi';
import { toast } from 'react-toastify';

const fakeApi = new FakerApi();

export const getComment = async (post_id: number) => {
  try {
    const response: any = await fakeApi.get('/comments', { post_id });
    if (response.success) {
      return response.data;
    }
  } catch (error: unknown | any) {
    return;
  }
};

export const createComment = async (
  post_id: number,
  comment: { content: string },
) => {
  try {
    const response: any = await fakeApi.post('/comments/create', {
      post_id,
      comment,
    });
    if (response.success) {
      toast.success(response.message);
    }
  } catch (error: unknown | any) {
    toast.error(error.message);
  }
};

export const removeComment = async (post_id: number, comment_id: number) => {
  try {
    const response: any = await fakeApi.delete('/comments/remove', {
      post_id,
      comment_id,
    });
    if (response.success) {
      toast.success(response.message);
    }
  } catch (error: unknown | any) {
    toast.error(error.message);
  }
};

export const editComment = async (
  post_id: number,
  comment_id: number,
  comment: { content: string },
) => {
  try {
    const response: any = await fakeApi.put('/comments/update', {
      post_id,
      comment_id,
      comment,
    });
    if (response.success) {
      toast.success(response.message);
    }
  } catch (error: unknown | any) {
    toast.error(error.message);
  }
};

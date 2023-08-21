import { getUserLogged, handleLogout } from '../services/auth/authServices';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createPost, getPost } from '../services/posts/postServices';
import { useNavigate } from 'react-router-dom';
import PostCardContent from '../components/CardsContent/PostCardContent';
import SubmitBtn from '../components/SubmitBtn/SubmitBtn';

const Posts: React.FC = () => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [posts, setPosts] = useState([]);

  const { register, watch, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const user = await getUserLogged();
      setName(user.name);
      setUserId(user.id);
    }
    getUser();
  }, [name, userId]);

  const createPosts = async () => {
    await createPost(watch('title'), watch('post'));
    reset();
  };

  useEffect(() => {
    async function getPosts() {
      const posts = await getPost();
      setPosts(posts);
    }
    getPosts();
  }, [posts]);

  return (
    <main className="mb-12">
      <header>
        <button
          onClick={() => handleLogout(navigate)}
          className="bg-transparent border-gray-300 border-2 py-1 rounded-md text-sm absolute top-0 right-0 mt-4 mr-4"
        >
          Sair
        </button>
        <div className="text-gray-300 font-bold text-[8px] mt-8">
          <h1>Bem vindo {name}, faça seu post!</h1>
        </div>
      </header>
      <form onSubmit={handleSubmit(createPosts)}>
        <div className="flex flex-col items-start justify-between">
          <input
            className=" mt-6 px-4 py-2 border border-gray-600 rounded-md w-full"
            type="text"
            placeholder="Escreva seu título aqui ..."
            maxLength={30}
            {...register('title', { required: true })}
          />
          <div className="flex flex-col items-start mt-4 bg-gradient-to-r from-[#2b2b35] border rounded-md border-gray-600 border-l-[#293749] w-full">
            <textarea
              className="resize-none w-full px-4 py-2 rounded-t-md"
              rows={8}
              placeholder="Escreva seu post aqui ..."
              maxLength={2000}
              {...register('post', { required: true })}
            />
            <SubmitBtn>Postar</SubmitBtn>
          </div>
        </div>
      </form>

      {posts.map((post: any) =>
        userId === post.user_id ? (
          <div key={post.id}>
            <PostCardContent name={name} post={post} />
          </div>
        ) : null,
      )}
    </main>
  );
};
export default Posts;

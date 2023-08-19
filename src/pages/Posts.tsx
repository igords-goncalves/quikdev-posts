import { getUserLogged } from '../services/auth/authServices';
import { useEffect, useState } from 'react';
import { Post } from '../components/Post';
import { useForm } from 'react-hook-form';
import { createPost, getPost } from '../services/posts/postServices';
import { PostAction } from '../components/Post/PostAction';

const Posts: React.FC = () => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [posts, setPosts] = useState([]);

  const { register, watch, handleSubmit } = useForm();

  (async () => {
    const userData = await getUserLogged();
    setName(userData.name);
    setUserId(userData.id);
  })();

  async function getPosts() {
    const posts = await getPost();
    setPosts(posts);
  }

  useEffect(() => {
    getPosts();
  }, []);

  const onSubmit = () => {
    const title = watch('title');
    const post = watch('post');

    createPost(title, post);
  };

  return (
    <>
      <Post.Header name={name} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Post.Root>
          <Post.Input
            name="title"
            type="text"
            placeholder="Escreva seu título aqui ..."
            register={register('title')}
          />
          <Post.Container>
            <Post.TextArea
              rows={8}
              placeholder="Escreva seu post aqui ..."
              register={register('post')}
            />
            <Post.Submit>Postar</Post.Submit>
          </Post.Container>
        </Post.Root>
      </form>
      {posts.map((post: any) =>
        userId === post.user_id ? (
          <>
            <Post.Card key={post.id} name={name} post={post}>
              <Post.Comment />
              <PostAction post={post} />
            </Post.Card>
            {/* Area de renderização da area de edição */}
            <div className="pl-10">
              {/* Area preparada para comentários! */}
              <Post.Card key={post.id} name={name} post={post}>
                <PostAction post={post} />
              </Post.Card>
            </div>
          </>
        ) : null,
      )}
    </>
  );
};
export default Posts;

import { UseFormRegisterReturn, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { editPost, removePost } from '../../services/posts/postServices';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import Comment from '../Comment';
import {
  PencilSimpleLine,
  Trash,
  ChatDots,
  UserCircle,
} from '@phosphor-icons/react';
// import { removeComment } from '../../services/comments/commentServices';

interface PostCardContentProps {
  name: string;
  post: UseFormRegisterReturn<'post'> | any;
}

const PostCardContent: React.FC<PostCardContentProps> = ({ name, post }) => {
  const [isPostEdited, setIsPostEdited] = useState(false);
  const [hasComment, setHasComment] = useState(false);

  const { register, handleSubmit, watch } = useForm();

  const updatePost = async () => {
    const newpost = watch('newpost');
    setIsPostEdited(false);

    await editPost(post.id, { title: post.title, content: newpost });
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isPostEdited) {
        setIsPostEdited(false);
      }
    };
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isPostEdited, setIsPostEdited]);

  return (
    <>
      <div
        className="flex flex-col items-start gap-3 text-sm justify-between px-4 py-4 mt-4 bg-[#3b3b3b] border-[1px] border-gray-600 rounded-md"
        key={post.id}
      >
        <div className="flex justify-between text-gray-300 items-center w-full font-semibold">
          <h2>{post.title}</h2>
          <p className="text-[10px] flex text-gray-300 items-center gap-1">
            <UserCircle size={16} color="rgb(209 213 219)" weight="bold" />
            {name.toLocaleUpperCase()}
          </p>
        </div>

        <p
          className="max-w-sm text-start text-gray-400 my-3"
          style={{ overflowWrap: 'break-word' }}
        >
          {post.content}
        </p>
        <div className="flex items-end justify-between w-full">
          <button
            onClick={() => {
              !hasComment ? setHasComment(true) : setHasComment(false);
            }}
            className={`flex gap-1 bg-transparent text-xs font-normal p-0 border-none focus:outline-none hover:text-blue-500 ${
              hasComment ? 'text-blue-500' : 'text-white'
            }`}
          >
            <ChatDots size={16} color="rgb(209 213 219)" weight="bold" />
            Comentar
          </button>
          <div className="gap-4 flex">
            <button
              aria-label="editar"
              onClick={() => {
                !isPostEdited ? setIsPostEdited(true) : setIsPostEdited(false);
              }}
              className={`flex gap-1 bg-transparent text-xs font-normal p-0 border-none focus:outline-none hover:text-yellow-500 ${
                isPostEdited ? 'text-yellow-500' : 'text-white'
              }  `}
            >
              <PencilSimpleLine
                size={16}
                color="rgb(209 213 219)"
                weight="bold"
              />
              Editar
            </button>

            <button
              aria-label="excluir"
              onClick={() => {
                removePost(post.id);
              }}
              className="flex gap-1 bg-transparent text-xs font-normal p-0 border-none outline-none focus:outline-none hover:text-red-500"
            >
              <Trash size={16} color="rgb(209 213 219)" weight="bold" />
              Excluir
            </button>
          </div>
        </div>
        {isPostEdited ? (
          <form
            onSubmit={handleSubmit(updatePost)}
            className="flex flex-col items-start mt-4 border rounded-md border-gray-300 w-full"
          >
            <textarea
              className="resize-none w-full px-4 py-2 rounded-t-md"
              defaultValue={post.content}
              rows={6}
              placeholder="Edite seu post aqui ou tecle esc para cancelar"
              {...register('newpost', { required: true })}
            />
            <SubmitBtn>Editar</SubmitBtn>
          </form>
        ) : null}
      </div>

      <Comment
        post={post}
        hasComment={hasComment}
        setHasComment={setHasComment}
        isPostEdited={isPostEdited}
        setIsPostEdited={setIsPostEdited}
      />
    </>
  );
};

export default PostCardContent;

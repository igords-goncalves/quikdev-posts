import {
  editComment,
  removeComment,
} from '../../services/comments/commentServices';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import { PencilSimpleLine, Trash } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface CommentCardContentProps {
  comment: object | any;
  post: object | any;
}

const CommentCardContent: React.FC<CommentCardContentProps> = ({
  comment,
  post,
}) => {
  const [isCommentEdited, setIsCommentEdited] = useState(false);

  const { register, handleSubmit, watch } = useForm();

  const updateComment = async () => {
    const newComment = watch('newcomment');
    setIsCommentEdited(false);

    await editComment(post.id, comment.id, { content: newComment });
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isCommentEdited) {
        setIsCommentEdited(false);
      }
    };
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isCommentEdited, setIsCommentEdited]);

  return (
    <>
      <div className="flex flex-col items-start gap-3 text-sm justify-between px-4 py-4 mt-4 bg-[#3b3b3b] border-[1px] border-gray-600 rounded-md">
        <p
          className="max-w-sm  text-start text-gray-400 my-3"
          style={{ overflowWrap: 'break-word' }}
        >
          {comment.content}
        </p>
        <div className="flex items-end justify-between w-full">
          <div className="gap-4 flex">
            <button
              aria-label="editar"
              onClick={() => {
                !isCommentEdited
                  ? setIsCommentEdited(true)
                  : setIsCommentEdited(false);
              }}
              className={`flex gap-1 bg-transparent text-xs font-normal p-0 border-none focus:outline-none hover:text-yellow-500 ${
                isCommentEdited ? 'text-yellow-500' : 'text-white'
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
                removeComment(post.id, comment.id);
              }}
              className="flex gap-1 bg-transparent text-xs font-normal p-0 border-none outline-none focus:outline-none hover:text-red-500"
            >
              <Trash size={16} color="rgb(209 213 219)" weight="bold" />
              Excluir
            </button>
          </div>
        </div>
        {isCommentEdited ? (
          <form
            onSubmit={handleSubmit(updateComment)}
            className="flex flex-col items-start mt-4 border rounded-md border-gray-300 w-full"
          >
            <textarea
              className="resize-none w-full px-4 py-2 rounded-t-md"
              defaultValue={comment.content}
              rows={6}
              placeholder="Edite seu comentário aqui ou tecle esc para cancelar"
              {...register('newcomment', { required: true })}
            />
            <SubmitBtn>Editar</SubmitBtn>
          </form>
        ) : null}
      </div>
    </>
  );
};

export default CommentCardContent;

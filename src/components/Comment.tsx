import SubmitBtn from './SubmitBtn/SubmitBtn';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  createComment,
  getComment,
} from '../services/comments/commentServices';
import CommentCardContent from './CardsContent/CommentCardContent';

interface CommentProps {
  post: object | any;
  hasComment: boolean;
  setHasComment: Dispatch<SetStateAction<boolean>>;
  isPostEdited: boolean;
  setIsPostEdited: Dispatch<SetStateAction<boolean>>;
}

const Comment: React.FC<CommentProps> = ({
  post,
  hasComment,
  setHasComment,
}) => {
  const [comments, setComments] = useState<any>([]);

  const { register, handleSubmit, watch, reset } = useForm();

  useEffect(() => {
    async function getComments() {
      const comments = await getComment(post.id);
      setComments(comments);
    }
    getComments();
  }, [post.id, comments]);

  const createComments = async () => {
    setHasComment(false);
    const commentContent = watch('comment');
    await createComment(post.id, { content: commentContent });
    const updatedComments = await getComment(post.id);
    setComments(updatedComments);
    reset();
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && hasComment) {
        setHasComment(false);
      }
    };
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [hasComment, setHasComment]);

  return (
    <>
      {hasComment ? (
        <form
          role="form"
          onSubmit={handleSubmit(createComments)}
          className="flex flex-col bg-[#3b3b3b] items-start mt-4 border rounded-md border-gray-300 w-full"
        >
          <textarea
            className="resize-none w-full px-4 py-2 rounded-t-md"
            rows={6}
            placeholder="Poste seu comentário aqui ou tecle esc para cancelar"
            {...register('comment', { required: true })}
            defaultValue={''}
          />
          <SubmitBtn>Comentar</SubmitBtn>
        </form>
      ) : null}

      <div className="pl-10">
        {comments &&
          comments.map((comment: any) => {
            return (
              <div key={comment.id}>
                <CommentCardContent comment={comment} post={post} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Comment;

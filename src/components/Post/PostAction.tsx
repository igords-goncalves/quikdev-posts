import { removePost } from '../../services/posts/postServices';
import { PencilSimpleLine, Trash } from '@phosphor-icons/react';

interface PostActionProps {
  post: any;
}

export const PostAction: React.FC<PostActionProps> = ({ post }) => {
  return (
    <div className="gap-4 flex">
      <button className="flex gap-1 bg-transparent text-xs font-normal p-0 border-none focus:outline-none">
        <PencilSimpleLine size={16} color="rgb(209 213 219)" weight="bold" />
        Editar
      </button>

      <button
        onClick={() => removePost(post.id)}
        className="flex gap-1 bg-transparent text-xs font-normal p-0 border-none outline-none focus:outline-none"
      >
        <Trash size={16} color="rgb(209 213 219)" weight="bold" />
        Excluir
      </button>
    </div>
  );
};

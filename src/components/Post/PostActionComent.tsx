import { ChatDots } from '@phosphor-icons/react';

export const PostActionComment: React.FC = () => {
  return (
    <button className="flex gap-1 bg-transparent text-xs font-normal p-0 border-none focus:outline-none">
      <ChatDots size={16} color="rgb(209 213 219)" weight="bold" />
      Comentar
    </button>
  );
};

import Balancer from 'react-wrap-balancer';
import { UserCircle } from '@phosphor-icons/react';

interface PostCardProps {
  name: string;
  post: any;
  children?: React.ReactNode;
}

export const PostCard: React.FC<PostCardProps> = ({ name, post, children }) => {
  return (
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

      <p className="max-w-sm  text-start text-gray-400 my-3">
        <Balancer>{post.content}</Balancer>
      </p>
      <div className="flex items-end justify-between w-full">{children}</div>
    </div>
  );
};

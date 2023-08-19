interface PostRootProps {
  children: React.ReactNode;
}

export const PostRoot: React.FC<PostRootProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-start justify-between">{children}</div>
  );
};

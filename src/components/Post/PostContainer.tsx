interface PostContainerProps {
  children: React.ReactNode;
}

export const PostContainer: React.FC<PostContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-start mt-4 bg-gradient-to-r from-[#2b2b35] border rounded-md border-gray-600 border-l-[#293749] w-full">
      {children}
    </div>
  );
};

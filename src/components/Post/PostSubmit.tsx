interface PostSubmitProps {
  children: React.ReactNode;
}

export const PostSubmit: React.FC<PostSubmitProps> = ({ children }) => {
  return (
    <button
      type="submit"
      className="border-[#6038f1] border-2 hover:bg-[#4026a0] text-white text-sm mx-4 my-4 px-6 py-2 rounded-md mt-4"
    >
      {children}
    </button>
  );
};

interface PostTitleProps {
  name: string;
  type: string;
  placeholder: string;
  register: any;
}

export const PostInput: React.FC<PostTitleProps> = ({ register, ...props }) => {
  return (
    <input
      className=" mt-6 px-4 py-2 border border-gray-600 rounded-md w-full"
      {...register}
      {...props}
    />
  );
};

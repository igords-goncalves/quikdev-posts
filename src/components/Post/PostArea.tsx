interface PostAreaProps {
  rows: number;
  placeholder: string;
  register: any;
}

export const PostArea: React.FC<PostAreaProps> = ({ register, ...props }) => {
  return (
    <textarea
      className="resize-none w-full px-4 py-2 rounded-t-md"
      {...props}
      {...register}
    />
  );
};

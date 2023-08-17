interface FormRootProps {
  children: React.ReactNode;
}

export const FormRoot: React.FC<FormRootProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div>{children}</div>
    </div>
  );
};

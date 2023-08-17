interface FormTitleProps {
  children: React.ReactNode;
}

export const FormTitle: React.FC<FormTitleProps> = ({ children }) => {
  return <h1 className="text-3xl font-bold text-center">{children}</h1>;
};

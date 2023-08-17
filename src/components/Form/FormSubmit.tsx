interface FormSubmitProps {
  children: React.ReactNode;
}

export const FormSubmit: React.FC<FormSubmitProps> = ({ children }) => {
  return (
    <button className="bg-[#6038f1] hover:bg-[#4026a0] w-full" type="submit">
      {children}
    </button>
  );
};

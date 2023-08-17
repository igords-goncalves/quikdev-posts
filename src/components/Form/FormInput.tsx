/**
 * Adjusting correctly the types of the input props
 */
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: any;
  errors: any;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  register,
  errors,
  ...props
}) => {
  return (
    <div className="flex flex-col w-full my-4 items-start">
      <label className="text-sm font-normal text-gray-300">
        {label}
        <sup>*</sup>
      </label>
      <input
        className="px-4 py-2 border border-gray-400 rounded-md"
        {...props}
        {...register}
      />
      {errors && <span className="text-sm text-red-400">{errors.message}</span>}
    </div>
  );
};

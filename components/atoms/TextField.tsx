import { ErrorMessage, FieldConfig, useField } from 'formik';
import { InputHTMLAttributes } from 'react';

interface TextFieldProps extends Omit<FieldConfig<string>, 'component' | 'children'> {
  label: string;
}

export default function TextField({ label, ...props }: TextFieldProps) {
  const [field, meta] = useField<string>(props);
  const inputProps: InputHTMLAttributes<HTMLInputElement> = {
    ...field,
    ...props,
    placeholder: label,
    autoComplete: 'off'
  };

  return(
    <div className="field">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`${meta.touched && meta.error && 'is-invalid'}`}
        {...inputProps}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}

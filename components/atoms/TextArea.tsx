import { ErrorMessage, FieldConfig, useField } from 'formik';
import { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends Omit<FieldConfig<string>, 'component' | 'children'> {
  label: string;
}

export default function TextArea({ label, ...props }: TextAreaProps) {
  const [field, meta] = useField<string>(props);
  const textareaProps: TextareaHTMLAttributes<HTMLTextAreaElement> = {
    ...field,
    ...props,
    placeholder: label,
    autoComplete: 'off'
  };

  return(
    <div className="field">
      <label htmlFor={field.name}>{label}</label>
      <textarea
        className={`${meta.touched && meta.error && 'is-invalid'}`}
        {...textareaProps}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}

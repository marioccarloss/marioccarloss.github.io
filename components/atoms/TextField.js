import { ErrorMessage, useField } from 'formik';

export default function TextField({label,...props}) {

  const [field, meta] = useField(props);

  return(
    <div className="field">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`${meta.touched && meta.error && 'is-invalid'}`}
        autoComplete='off'
        {...field}
        {...props}
        placeholder={label}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}
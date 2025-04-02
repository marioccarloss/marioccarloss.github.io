import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import Spinner from '../atoms/Spinner';
import TextArea from '../atoms/TextArea';
import TextField from '../atoms/TextField';

export default function FormContact() {
  const [sendMessage, setSendMessage] = useState(false);

  const validate = Yup.object({
    fullname: Yup.string()
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    message: Yup.string()
      .required('Message is required'),
  });

  const initialValues = {
    fullname: '',
    email: '',
    message: '',
  }

  return(
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values, {resetForm, setSubmitting}) => {
        setTimeout(()=>{
          setSubmitting(false);
          fetch('/api/mail', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
          })
          .then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => {
            console.log(response)
            resetForm({ values: initialValues })
            setSendMessage(true)
          });
        },800)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <TextField label="Full Name" name="fullname" type="text"/>
          <TextField label="Email" name="email" type="email"/>
          <TextArea label="Tell me about your project" name="message" type="message"/>
          <button
            type="submit"
            className="btn"
            disabled={isSubmitting}
          >
            {!isSubmitting ? (
              'Send'
            ) : (
              <>
                Sending&nbsp;<Spinner />
              </>
            )}
          </button>
          {
            sendMessage && <p className="paragraph message">Your message has been sent successfully.<br/> Hope we can work together</p>
          }
        </Form>
      )}
    </Formik>
  )
}

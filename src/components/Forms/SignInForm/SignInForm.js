import React from 'react'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import '../auth-form.scss'

const validationSchema = Yup.object({
  username: Yup.string().email('- Invalid email').required('- Required'),
  password: Yup.string().required('- Required'),
})

const initialValues = { username: '', password: '' }

const SignInForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className='form-container'>
        <div className='form-input-container'>
          <label htmlFor='username'>
            Username {''}
            <ErrorMessage name='username' className='error-message'>
              {(errorMsg) => <span className='error-message'>{errorMsg}</span>}
            </ErrorMessage>
          </label>
          <Field
            name='username'
            type='username'
            autoComplete='off'
            placeholder='Insert email'
            className='form-input'
          />
        </div>

        <div className='form-input-container'>
          <label htmlFor='password'>
            Password {''}
            <ErrorMessage name='password'>
              {(errorMsg) => <span className='error-message'>{errorMsg}</span>}
            </ErrorMessage>
          </label>
          <Field
            name='password'
            type='password'
            autoComplete='off'
            placeholder='Insert password'
            className='form-input last-input'
          />
        </div>

        <button type='submit' className='form-button'>
          Sign In
        </button>
      </Form>
    </Formik>
  )
}

export default SignInForm

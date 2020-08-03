import React from 'react'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import '../auth-form.scss'

const initialValues = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
}

const validationSchema = Yup.object({
  firstName: Yup.string().required('- Required'),
  lastName: Yup.string().required('- Required'),
  username: Yup.string().email('- Invalid email').required('- Required'),
  password: Yup.string().required('- Required'),
})

const SignUpForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className='form-container'>
        <div className='form-input-container'>
          <label htmlFor='firstName'>
            First Name {''}
            <ErrorMessage name='firstName' className='error-message'>
              {(errorMsg) => <span className='error-message'>{errorMsg}</span>}
            </ErrorMessage>
          </label>
          <Field
            name='firstName'
            type='text'
            autoComplete='off'
            placeholder='Fulanito'
            className={'form-input'}
          />
        </div>

        <div className='form-input-container'>
          <label htmlFor='lastName'>
            Last Name {''}
            <ErrorMessage name='lastName' className='error-message'>
              {(errorMsg) => <span className='error-message'>{errorMsg}</span>}
            </ErrorMessage>
          </label>
          <Field
            name='lastName'
            type='text'
            autoComplete='none'
            placeholder='Gomez'
            className={'form-input'}
          />
        </div>

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
            className={'form-input'}
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
          Sign Up
        </button>
      </Form>
    </Formik>
  )
}

export default SignUpForm

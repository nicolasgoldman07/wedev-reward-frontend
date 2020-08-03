import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SignInForm } from '../../components/Forms/SignInForm'

import useSignInMutation from '../../hooks/useSignInMutation'
import { useHistory } from 'react-router-dom'

import './signin.scss'
import useCurrentUserQuery from '../../hooks/useCurrenUserQuery'

const SignIn = () => {
  const history = useHistory()
  const [mutationError, setMutationError] = useState(null)
  const { signInUser } = useSignInMutation()
  const { error, loading, currentUser } = useCurrentUserQuery()

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  if (currentUser) history.push('/home')

  const onSubmit = async (input) => {
    const { authError } = await signInUser(input)
    setMutationError(authError)
    if (!authError) history.push('/home')
  }

  return (
    <div className='signin-container'>
      <h2 className='signin-title'>Login</h2>
      <SignInForm onSubmit={onSubmit} />
      <Link to='/auth/signup' className='without-account'>
        Don't you have an account? <u>Sign up</u>
      </Link>
      {mutationError && (
        <p className='authError'>
          Login error: <strong>{mutationError}</strong>
        </p>
      )}
    </div>
  )
}

export default SignIn

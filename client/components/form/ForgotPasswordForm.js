import { Formik, Form, Field, ErrorMessage } from 'formik'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import FormSuccessMessage from './partials/FormSuccessMessage'
import Button from '../Button/Button'
import { ForgotPasswordSchema } from '../../assets/validation/schemas'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'
import userUtils from '../../assets/userUtils'
import { useAuthModal, useDispatchAuthModal } from '../../contexts/AuthModalProvider/AuthModalProvider'
import Router from 'next/router'


const LoginForm = () => {
  // const userData = useUser()
  const dispatchUserData = useDispatchUser()
  const dispatchAuthModal = useDispatchAuthModal()

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          serverError: ''
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={ForgotPasswordSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          userUtils.forgotPassword(values.email)
            .then(response => {
              // dispatchUserData({
              //   type: 'LOGIN',
              //   userData: response.data
              // })
              // dispatchAuthModal({
              //   type: 'CLOSE_LOGIN_MODAL'
              // })
              // Router.push('/debug')
              // console.log(response.data)
              setSubmitting(false)
            })
            .catch(error => {
              // console.log(error)
              // dispatchUserData({
              //   type: 'SET_IS_LOADING_FALSE'
              // })
              setFieldError('serverError', error.response.data)
              setSubmitting(false)
            })
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <FormSuccessMessage></FormSuccessMessage>
            <ErrorMessage name="serverError" component={FormErrorMessage} />
            <div>
              <Label htmlFor="email">Email address</Label>
              <Field id='email' type="email" name="email" placeholder='you@example.com' as={Input} />
              <ErrorMessage name="email" component={FormErrorMessage} />
            </div>
            <Button type="submit" color='gamifyPrimary' disabled={isSubmitting} className='mt-6'>
              Send Recovery Email
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm
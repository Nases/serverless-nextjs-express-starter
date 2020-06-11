import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'
import Input from './partials/Input'
import Label from './partials/Label'
import FormErrorMessage from './partials/FormErrorMessage'
import Button from './partials/Button'
import { LoginSchema } from '../../assets/validation/schemas'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'
import userUtils from '../../assets/userUtils'


const LoginForm = () => {
  // const userData = useUser()
  const dispatchUserData = useDispatchUser()



  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          serverError: ''
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          userUtils.login(values.email, values.password)
            .then(response => {
              dispatchUserData({
                type: 'UPDATE_USER',
                userData: response.data
              })
              console.log(response.data)
              setSubmitting(false)
            })
            .catch(error => {
              console.log(error)
              setFieldError('serverError', error.response.data)
              setSubmitting(false)
            })
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <ErrorMessage name="serverError" component={FormErrorMessage} />
            <div>
              <Label htmlFor="email">Email address</Label>
              <Field id='email' type="email" name="email" placeholder='you@example.com' as={Input} />
              <ErrorMessage name="email" component={FormErrorMessage} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Field id='password' type="password" name="password" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' as={Input} />
              <ErrorMessage name="password" component={FormErrorMessage} />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Log In
          </Button>
          </Form>
        )}
      </Formik>
    </div >
  )
}

export default LoginForm
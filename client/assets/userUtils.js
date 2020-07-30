import axios from 'axios'


const uri = 'http://localhost:5000/'

const userUtils = {
  login: (email, password) => {
    const p = axios.post(uri + 'login', {
      email: email,
      password: password
    }, {
      withCredentials: true
    })
    return p
  },
  signUp: (email, password, confirmPassword) => {
    const p = axios.post(uri + 'signup', {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }, {
      withCredentials: true
    })
    return p
  },
  changePassword: (currentPassword, newPassword, confirmNewPassword) => {
    const p = axios.post(uri + 'change-password', {
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword
    }, {
      withCredentials: true
    })
    return p
  },
  forgotPassword: (email) => {
    const p = axios.post(uri + 'forgot-password', {
      email: email,
    }, {
      withCredentials: true
    })
    return p
  },
  getUserData: () => {
    const p = axios.post(uri + 'get-user-data', null, {
      withCredentials: true
    })
    return p
  },
  signOut: () => {
    const p = axios.post(uri + 'sign-out', null, {
      withCredentials: true
    })
    return p
  }
}



export default userUtils


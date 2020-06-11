import { useEffect } from 'react'
import userUtils from '../../assets/userUtils'
import { useUser, useDispatchUser } from '../../contexts/UserProvider/UserProvider'


const GetUserData = ({ children }) => {
  const userData = useUser()
  const dispatchUserData = useDispatchUser()

  useEffect(() => {
    userUtils.getUserData()
      .then(response => {
        if (userData._id !== response.data._id) {
          dispatchUserData({ type: 'LOGIN', userData: response.data })
        }
        console.log(response)
      })
      .catch(error => {
        dispatchUserData({ type: 'SET_IS_LOADING_FALSE' })
      })
  }, [])
  return (
    <>
      {children}
    </>
  )
}

export default GetUserData
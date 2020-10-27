import { getUserSession } from '../../utils/auth'


const getUserData = async (obj, args, { req, res }, info) => {
  try {
    const session = await getUserSession(req)
    if (session) {
      console.log(req.user)
      return session
    }
  } catch {
    return new Error('getUserData error!')
  }
}

export default getUserData
import Iron from '@hapi/iron'
import { MAX_AGE, setTokenCookie, getTokenCookie } from './auth-cookies'
import User from '../../../models/User'


const SESSION_TOKEN_SECRET = process.env.SESSION_TOKEN_SECRET


export const setUserSession = async (res, userId) => new Promise(async (resolve, reject) => {
  const createdAt = Date.now()
  // Create a session object with a max age that we can validate later
  const obj = { userId, createdAt, maxAge: MAX_AGE }
  const token = await Iron.seal(obj, SESSION_TOKEN_SECRET, Iron.defaults)

  await setTokenCookie(res, token)

  resolve()
})


export const getUserSession = async req => {
  const token = getTokenCookie(req)

  if (!token) return

  const session = await Iron.unseal(token, SESSION_TOKEN_SECRET, Iron.defaults)
  const expiresAt = session.createdAt + session.maxAge * 1000

  // Validate the expiration date of the session
  if (Date.now() < expiresAt) {
    return await User.find({ _id: session.userId }).then(value => value[0])
  }
}


export const isAuthenticated = async (req, roleId = []) => new Promise(async (resolve, reject) => {
  const user = await getUserSession(req)
  if (user) {
    if (roleId.includes(user.roleId)) {
      resolve(user)
    } else { reject('Unauthorized.') }
  } else { reject('Unauthenticated.') }
})
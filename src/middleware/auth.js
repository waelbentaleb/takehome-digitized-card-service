import axios from '../config/axios'
import { UnauthorizedError } from '../helpers/ApiError'

export const isAuthorizedClient = async (req, res, next) => {
  try {
    const apikey = req.headers.authorization
    if (!apikey)
      throw new UnauthorizedError('Unauthorized action')

    const response = await axios.post(`/authorize/client/${req.params.userId}`, { apikey })

    if (!response)
      throw new UnauthorizedError('Unauthorized action')

    req.user = response.data

    next()
  } catch (error) { next(error) }
}
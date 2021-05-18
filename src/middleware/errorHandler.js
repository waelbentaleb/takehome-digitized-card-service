import { ApiError } from '../helpers/ApiError'

export default (err, req, res, next) => {
  if (err instanceof ApiError) {
    ApiError.handle(err, res)
  } else {
    console.error(err)
    return res.status(500).send({ error: err.message })
  }
}
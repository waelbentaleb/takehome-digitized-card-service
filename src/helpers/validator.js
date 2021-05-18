import Joi from 'joi'
import { Types } from 'mongoose'
import { BadRequestError } from './ApiError'

export default (schema, data) => {
  const { error } = schema.validate(data)

  if (!error) return

  const { details } = error
  const message = details.map((i) => i.message.replace(/['"]+/g, '')).join(',')

  throw new BadRequestError(message)
}

export const JoiObjectId = () =>
  Joi.string().custom((value, helpers) => {
    if (!Types.ObjectId.isValid(value))
      return helpers.error('any.invalid')
    else
      return value
  }, 'Object Id Validation')
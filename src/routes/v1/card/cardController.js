import Card from './card'
import validationSchema from './cardValidations'
import validator from '../../../helpers/validator'
import successResponse from '../../../helpers/successResponse'
import { BadRequestError, NotFoundError } from '../../../helpers/ApiError'


export async function create(req, res, next) {
  try {
    validator(validationSchema, req.body)

    let cardObject = await Card.findOne({ cardNumber: req.body.cardNumber })
    if (cardObject)
      throw new BadRequestError('card already exist')

    cardObject = {
      ...req.body,
      userId: req.user._id
    }
    cardObject = await Card.create(cardObject)

    return successResponse(res, cardObject)

  } catch (error) { next(error) }
}

export async function getAll(req, res, next) {
  try {

    const cardList = await Card.find({ userId: req.user._id })

    return successResponse(res, cardList)

  } catch (error) { next(error) }
}

export async function getById(req, res, next) {
  try {

    let cardObject = await Card.findOne({ userId: req.user._id, _id: req.params.cardId })
    if (!cardObject)
      throw new NotFoundError('card not found')

    return successResponse(res, cardObject)

  } catch (error) { next(error) }
}

export async function update(req, res, next) {
  try {
    validator(validationSchema, req.body)

    let cardObject = await Card.findOne({ userId: req.user._id, _id: req.params.cardId })
    if (!cardObject)
      throw new NotFoundError('card account not found')

    await cardObject.update(req.body)

    return successResponse(res, { success: true })

  } catch (error) { next(error) }
}

export async function remove(req, res, next) {
  try {

    let cardObject = await Card.findOne({ userId: req.user._id, _id: req.params.cardId })
    if (!cardObject)
      throw new NotFoundError('card not found')

    await Card.delete({ _id: req.params.cardId })

    return successResponse(res, { success: true })

  } catch (error) { next(error) }
}
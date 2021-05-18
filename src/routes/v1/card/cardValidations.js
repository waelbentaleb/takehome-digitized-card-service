import Joi from 'joi'

export default Joi.object({
  cardHolder: Joi.string().required(),
  cardNumber: Joi.string().required(),
  cvv: Joi.string().required(),
  expiration: Joi.string().required()
})
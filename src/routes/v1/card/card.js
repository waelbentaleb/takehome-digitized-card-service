import mongoose, { Schema } from 'mongoose'
import mongooseDelete from 'mongoose-delete'

const cardSchema = new Schema(
  {
    cardHolder: { type: String },
    cardNumber: { type: String },
    expiration: { type: String },
    cvv: { type: Number },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

cardSchema.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true, deletedBy: true })
export default mongoose.model('Card', cardSchema)
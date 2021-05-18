import mongoose from 'mongoose'
import { DATABASE_URL } from './env'

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.info('Mongoose connection done'))
  .catch((err) => {
    console.info('Mongoose connection error')
    console.error(err)
  })

mongoose.connection.on('error', (err) => {
  console.error('Mongoose default connection error: ' + err)
})

mongoose.connection.on('disconnected', () => {
  console.info('Mongoose default connection disconnected')
})

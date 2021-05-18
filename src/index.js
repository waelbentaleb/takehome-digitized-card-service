import express from 'express'
import morgan from 'morgan'
import './config/database'
import routesV1 from './routes/v1'
import errorHandler from './middleware/errorHandler'
import { PORT, NODE_ENV } from './config/env'

process.on('uncaughtException', err => console.error(err))

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use('/api/v1', routesV1)
app.use('/', express.static('public/uploads'));
app.use(errorHandler)

app.listen(PORT, () => console.log(`Digitized cards service starting in ${NODE_ENV} environment on ${PORT}`))
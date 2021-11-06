import express from 'express'
import { PORT } from './config'
import cors from 'cors'
import errorhandler from './middleware/errorHandler'
import routes from './router'

const app = express()

app.use(cors({ origin: ['http://localhost:4200'] }))
app.use(express.json())
app.use('/api', routes);
app.use(errorhandler);

app.listen(PORT, () => console.log(`app running on ${PORT} port`))
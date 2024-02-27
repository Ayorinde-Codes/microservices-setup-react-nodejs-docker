import express, { Response, Request } from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(
  cors({
    credentials: true,
  }),
)

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

const port = process.env.PORT || 4001

app.get('/', (req: Request, res: Response) => {
  return console.log('Welcome to first backend server')
})

// app.use('*', (req: Request, res: Response) => {
//   return console.log('Not Found')
// })

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

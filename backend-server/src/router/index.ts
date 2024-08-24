import express from 'express'
import sample from './sample'

const router = express.Router()

export default (): express.Router => {
  // controller-class(router) controller class here
  sample(router)
  return router
}

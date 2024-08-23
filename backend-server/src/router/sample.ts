import express from 'express'

import { details } from '../controllers/sample'

export default (router: express.Router) => {
  router.get('/sample/details', details)
}
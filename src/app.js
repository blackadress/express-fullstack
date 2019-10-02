import bodyParser from 'body-parser'
import express from 'express'

import { routes } from './routes'

const setup = () => {
  let app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))


  routes.map(route => route(app))

  return app
}

export { setup }
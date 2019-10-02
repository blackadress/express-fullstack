import bodyParser from 'body-parser'
import express from 'express'

import path from 'path'

import { routes } from './routes'

const setup = () => {
  let app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'pug')
  
  app.use('/static', express.static(path.join(__dirname, 'static')))
  app.use(express.static(path.join(__dirname, 'public')))

  routes.map(route => route(app))

  return app
}

export { setup }
import bodyParser from 'body-parser'
import express from 'express'

import path from 'path'

const setup = () => {
  let app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'pug')
  
  app.use('static', express.static(path.join(__dirname, 'static')))
  app.set('public', express.static(path.join(__dirname, 'public')))

  return app
}

export { setup }
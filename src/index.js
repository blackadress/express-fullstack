import { setup } from './app'
import { routes } from './routes'

import models from './models'

let app = setup()
setup(app)

routes.map(route => route(app))

const PORT = process.env.PORT || 3000
models.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app escuchando en puerto ${PORT}`)
    })
  })

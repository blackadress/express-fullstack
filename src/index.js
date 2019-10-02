import { setup } from './app'

import models from './models'

let app = setup()

const PORT = process.env.PORT || 3000
models.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app escuchando en puerto ${PORT}`)
    })
  })

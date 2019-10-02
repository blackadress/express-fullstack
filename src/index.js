import { setup } from './app'
import { routes } from './routes'

let app = setup()

routes.map(route => route(app))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`app escuchando en puerto ${PORT}`)
})
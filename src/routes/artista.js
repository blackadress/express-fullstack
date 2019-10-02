import { artistaGetAll } from '../controllers/artista.controller'

export const artistaRoute = app => {

  app.route('/artistas/')
    .get(artistaGetAll)
}
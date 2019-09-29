import models from '../models'

export const artistaRoute = app => {
  const Artista = models.artista

  app.route('/artistas/')
    .get((req, res) => {
      Artista.findAll()
        .then(rows => res.json(rows))
    })
}
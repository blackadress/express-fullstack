import models from '../models'

const Artista = models.artista

export const artistaGetAll = (req, res) => {
  Artista
    .findAll()
    .then(artistas => res.json(artistas))
    .catch(err => res.status(412).json(err))
}
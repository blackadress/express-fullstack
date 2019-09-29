export default (sequelize, Sequelize) => {
  const Artista = sequelize.define('artista', {
    nombre: {
      type: Sequelize.STRING
    },
    edad: {
      type: Sequelize.STRING
    },
    // foto apunta a una direccion que contiene la foto del artista
    foto: {
      type: Sequelize.STRING
    }
  })

  return Artista
}
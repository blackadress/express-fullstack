export default (sequelize, Sequelize) => {
  const Artista = sequelize.define('artista', {
    nombre: {
      type: Sequelize.STRING
    },
    fechaNacimiento: {
      type: Sequelize.DATE
    }
  })

  return Artista
}
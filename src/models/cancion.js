export default (sequelize, Sequelize) => {
  const Cancion = sequelize.define('cancion', {
    nombre: {
      type: Sequelize.STRING
    },
    lyrics: {
      type: Sequelize.TEXT
    }
  })

  Cancion.associate = models => {
    Cancion.belongsTo(models.artista, { foreignKey: 'artistaId'})
  }

  return Cancion
}
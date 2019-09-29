export default (sequelize, Sequelize) => {
  const Cancion = sequelize.define('cancion', {
    nombre: {
      type: Sequelize.STRING
    },
    // lyrics van a apuntar hacia un archivo de texto
    lyrics: {
      type: Sequelize.STRING
    }
  })

  Cancion.associate = models => {
    Cancion.belongsTo(models.artista, { foreignKey: 'artistaId'})
  }

  return Cancion
}
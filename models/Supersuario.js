module.exports = (connection, DataTypes) => {

    const model = connection.define('Superusuario', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },

      }, {
        timestamps: true,
        tableName: 'superusuarios'
      })

      model.associate = models => {
        


    }
    model.sync({alter:true})
    return model


}



 

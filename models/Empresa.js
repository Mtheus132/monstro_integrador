module.exports = (connection, DataTypes) => {

    const model = connection.define('Empresa', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        empresa: {
          type: DataTypes.STRING(100)
        },
        
        superusuario: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING(100)
        },
        senha: {
          type: DataTypes.STRING(100)
        }
      }, {
        timestamps: true,
        tableName: 'empresas'
      })

      model.associate = models => {


      }
      model.sync({alter:true})

  return model

}



 

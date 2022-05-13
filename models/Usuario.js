module.exports = (connection, DataTypes) => {

    const model = connection.define('Usuario', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nome: {
          type: DataTypes.STRING(100)
        },
        email: {
          type: DataTypes.STRING(100)
        },
        senha: {
          type: DataTypes.STRING(100)
        }
      }, {
        timestamps: true,
        tableName: 'usuarios'
      })

      model.associate = models => {

        model.belongsTo(models.Produto, {
          through: models.Produto,
          foreignKey: 'usuario_id',
          as: 'produtos'
        })
        

        model.sync({alter:true})

      }

    
      return model
 }
 

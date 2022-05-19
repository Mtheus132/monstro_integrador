module.exports = (connection, DataTypes) => {

   const model = connection.define('Produto', {
        id:{
            type: DataTypes.INTEGER(100),
            primaryKey: true,
            autoIncrement: true
        },
        imagem:{
            type: DataTypes.STRING(100)
        },
        nome:{
            type: DataTypes.STRING(50)
        },
        descricao:{
            type: DataTypes.STRING(100)
        },
        valor:{
            type: DataTypes.INTEGER
        },
        quantidade: {
            type: DataTypes.INTEGER(3)
        }
    },{
        timestamps: true,
        tableName: 'produtos'
    })
    model.associate = models => {


        model.belongsTo (models.Categoria, {
            foreignKey: 'categoria_id',
            as: 'categoria'
        })    

        model.belongsToMany(models.Usuario, {
            through: models.ProdutoFavoritoUsuario,
            foreignKey: 'produto_id',
            as: 'favoritador'
        })
        
        model.belongsTo(models.Empresa, {
            foreignKey: 'empresa_id',
            as: 'empresas'
        })     
        
        
       
        model.sync({alter:true})
    }

    return model
}

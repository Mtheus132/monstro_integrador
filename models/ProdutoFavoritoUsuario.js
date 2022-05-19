module.exports = (connection, DataTypes) => {
    const model = connection.define('ProdutoFavoritoUsuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
              autoIncrement: true
        },
        produto_id:  DataTypes.INTEGER,
        usuario_id:  DataTypes.INTEGER
        
    })
        model.sync({ alter:true })
        
        return model
}
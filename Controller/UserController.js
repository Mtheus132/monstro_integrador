//const{ Ususario } =require('../models')
const Usuario = require('../models/Usuario')

const UserController= {
    index: async (req, res)=>{
        let users = await Usuario.findAll();
        
        console.log(users);
        return users
    }
}

module.exports = UserController
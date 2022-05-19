const{ Usuario } =require('../models')

const UserController= {
    index: async (req, res)=>{
        let users = await Usuario.findAll();
        
        console.log(users);
        return users
    }
}

module.exports = UserController
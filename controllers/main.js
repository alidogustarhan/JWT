const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')


const login = async (req,res) => {
    const {username,password} = req.body

    if(!username || !password){
    throw new CustomAPIError('Please provide email and password',400)
    }
    if(username != "ali" || password != 1234){
        throw new CustomAPIError('Wrong email or password',400)
    }
    if(username === "ali" || password === 1234){
    const id = Math.floor(Math.random()*100)
    const token =jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'7d'})
    res.status(200).json({msg:'user created',token})
    }
}

const dashboard = async (req,res) => {
console.log(req.user)

res.status(200).json({
    msg:`hello ${req.user.username}`,secret:`Here is your authorized data$`})
               
}

module.exports ={
    login,
    dashboard,
}
const User = require("../models/User")
const catchError = require("../utils/catchError")


const getAllUsers = catchError(async(req, res) => {
let users = await User.findAll()
return res.json(users)
});

const createUser = catchError(async(req,res) => {

    let user = await User.create(req.body)

    return res.json(user)
})

const getUser = catchError(async(req,res) => {

    const {id} = req.params

    let user = await User.findByPk(id)

    res.json({user})
})

const deleteUser = catchError(async(req, res) => {

    const {id} = req.params

    await User.destroy({where:{id}})

    res.sendStatus(202)

})

const updateUser = catchError(async(req,res) => {

    const {id} = req.params

    let user = await User.update(req.body, {where :{id}, returning: true})

    res.json(user)

})



module.exports = {

    getAllUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser

}
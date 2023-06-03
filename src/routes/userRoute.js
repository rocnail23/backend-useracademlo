const express = require("express")
const userRoute = express.Router()
const {getAllUsers, createUser, getUser, deleteUser, updateUser } = require("../controllers/user.controllers")


userRoute.route("/")
.get(getAllUsers)
.post(createUser)

userRoute.route("/:id")
.get(getUser)
.delete(deleteUser)
.put(updateUser)



module.exports = userRoute
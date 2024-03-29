import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'


// @desc    Auth user & get token
// @desc    GET /api/users/login
const authUser =  asyncHandler (async (req, res ) => {
    const { email, password } = req.body

    const user = await  User.findOne({ email })

    if(user && (await user.matchPassword(password))) { 
        res.json({
            _id: user.id,
            name:user.name,
            email:  user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Correo o contraseña incorrecta')
    }
})

// @desc    Register a new user
// @desc    POST /api/user
const registerUser =  asyncHandler (async (req, res ) => {
    const { name, email, password } = req.body

    const userExists = await  User.findOne({ email })

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
    name,
    email,
    password
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name:user.name,
            email:  user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    GET user profile
// @desc    GET /api/users/profile
// @acces   Private
const getUserProfile =  asyncHandler (async (req, res ) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user.id,
            name:user.name,
            email:  user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(401)
        throw new Error('User not found')
    }
})


export { authUser, getUserProfile, registerUser }
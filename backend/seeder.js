import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import news from './data/news.js'
import User from './models/userModel.js'
import New from './models/newsModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await New.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id
        
        const sampleNews = news.map(news => {
            return { ...news, user: adminUser }
        })

        await New.insertMany(sampleNews)

        console.log('Data Imported!'.green.inverse)
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await New.deleteMany()
        await User.deleteMany()

        

        console.log('Data Destroyed!'.red.inverse)
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
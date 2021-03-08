import mongoose from 'mongoose'

const newsSchema = mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    body2: {
        type: String,
        required: true
    },
    body3: {
        type: String,
        required: true
    },
    body4: {
        type: String,
        required: true
    },
    body5: {
        type: String,
        required: true
    },
    body6: {
        type: String,
        required: true
    },
    body7: {
        type: String,
        required: true
    },
    body8: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const News = mongoose.model('News', newsSchema)

export default News

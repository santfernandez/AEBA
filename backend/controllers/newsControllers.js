import asyncHandler from 'express-async-handler'
import News from '../models/newsModel.js'


// @desc    Fetch all news
// @desc    GET /api/news
const getNews =  asyncHandler (async (req, res ) => {
    const news = await News.find({})

    res.json(news)
})

// @desc    Fetch single news
// @desc    GET /api/news/:id
const getNewById =  asyncHandler (async (req, res ) => {
    const news = await News.findById(req.params.id)
    console.log(news)
    if(news) {
        res.json(news)
    } else {
        res.status(404)
        throw new Error('News not found')
    }
})

// @desc    Delete a news
// @desc    DELETE /api/news/:id
const deleteNews =  asyncHandler (async (req, res ) => {
    const news = await News.findById(req.params.id)
    
    if(news) {
        await news.remove()
        res.json({ message: "Noticia eliminada" })
    } else {
        res.status(404)
        throw new Error('New not found')
    }
})

// @desc    Create news
// @desc    POST /api/news
const createNews =  asyncHandler (async (req, res ) => {
    const singleNew = new News({
        title: "Título de muestra",
        subtitle: "Subtítulo de muestra",
        image: "http://drive.google.com/uc?export=view&id=",
        body: "Cuerpo de la noticia",
        category: "Categoría",
        user: req.user._id
    })

    const createdNews = await singleNew.save()
    res.status(201).json(createdNews)
})

// @desc    Update news
// @desc    PUT /api/news/:id
const updateNews =  asyncHandler (async (req, res ) => {
    const { title, subtitle, image, body, category } = req.body
    
    const singleNew = await News.findById(req.params.id)

    if(singleNew) {
        singleNew.title = title
        singleNew.subtitle = subtitle
        singleNew.image = image
        singleNew.body = body
        singleNew.category = category

        const updatedNews = await singleNew.save()
        res.json(updatedNews)
    } else {
        res.status(404)
        throw new Error('Noticia no encontrada')
    }

    
})


export {
    getNews,
    getNewById,
    deleteNews,
    createNews,
    updateNews
}
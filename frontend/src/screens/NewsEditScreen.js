import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listNewsDetails, updateNews } from '../actions/newsActions'
import { NEWS_UPDATE_RESET } from '../constants/newsConstants'
import Styles from './NewsEditScreen.css'

const NewsEditScreen = ({ match, history }) => {
  const newsId = match.params.id

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [body2, setBody2] = useState('')
  const [body3, setBody3] = useState('')
  const [body4, setBody4] = useState('')
  const [body5, setBody5] = useState('')
  const [body6, setBody6] = useState('')
  const [body7, setBody7] = useState('')
  const [body8, setBody8] = useState('')
  const [category, setCategory] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const newsDetails = useSelector((state) => state.newsDetails)
  const { loading, error, news } = newsDetails

  const newsUpdate = useSelector((state) => state.newsUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = newsUpdate


  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: NEWS_UPDATE_RESET })
      history.push('/gestionarnoticias')
    } else {
      if (!news.title || news._id !== newsId) {
        dispatch(listNewsDetails(newsId))
      } else {
        setTitle(news.title)
        setSubtitle(news.subtitle)
        setImage(news.image)
        setBody(news.body)
        setBody2(news.body2)
        setBody3(news.body3)
        setBody4(news.body4)
        setBody5(news.body5)
        setBody6(news.body6)
        setBody7(news.body7)
        setBody8(news.body8)
        setCategory(news.category)
      }
    }
  }, [dispatch, history, newsId, news, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateNews({
        _id: newsId,
        title,
        subtitle,
        image,
        body,
        body2,
        body3,
        body4,
        body5,
        body6,
        body7,
        body8 ,
        category,
      })
    )
  }

  return (
    <>
      <Link to='/gestionarnoticias' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Editar Noticia</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='title'>
              <Form.Label className="text-dark">Título</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ingrese título de la noticia'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='subtitle'>
              <Form.Label className="text-dark">Copete</Form.Label>
              <Form.Control
                type='string'
                placeholder='Ingrese copete'
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label className="text-dark">Imagen</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ingrese URL de imagen'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                className="upload-file-btn"
                id='image-file'
                label='Elegir archivo'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='body'>
              <Form.Label className="text-dark">Párrafo 1</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                type='text'
                placeholder='Ingresar cuerpo de la noticia'
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='body2'>
              <Form.Label className="text-dark">Párrafo 2</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                type='text'
                placeholder='Ingresar cuerpo de la noticia'
                value={body2}
                onChange={(e) => setBody2(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='body3'>
              <Form.Label className="text-dark">Párrafo 3</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                type='text'
                placeholder='Ingresar cuerpo de la noticia'
                value={body3}
                onChange={(e) => setBody3(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='body4'>
              <Form.Label className="text-dark">Párrafo 4</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                type='text'
                placeholder='Ingresar cuerpo de la noticia'
                value={body4}
                onChange={(e) => setBody4(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='body5'>
              <Form.Label className="text-dark">Párrafo 5</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                type='text'
                placeholder='Ingresar cuerpo de la noticia'
                value={body5}
                onChange={(e) => setBody5(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='body6'>
              <Form.Label className="text-dark">Párrafo 6</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                type='text'
                placeholder='Ingresar cuerpo de la noticia'
                value={body6}
                onChange={(e) => setBody6(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='body7'>
              <Form.Label className="text-dark">Párrafo 7</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                type='text'
                placeholder='Ingresar cuerpo de la noticia'
                value={body7}
                onChange={(e) => setBody7(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='body8'>
              <Form.Label className="text-dark">Párrafo 8</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                type='text'
                placeholder='Ingresar cuerpo de la noticia'
                value={body8}
                onChange={(e) => setBody8(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label className="text-dark">Categoría</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ingresar categoría'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Actualizar
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default NewsEditScreen
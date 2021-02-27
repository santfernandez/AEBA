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

const NewsEditScreen = ({ match, history }) => {
  const singleNewId = match.params.id

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const newsDetails = useSelector((state) => state.newsDetails)
  const { loading, error, singleNew } = newsDetails

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
      if (!singleNew.title || singleNew._id !== singleNewId) {
        dispatch(listNewsDetails(singleNewId))
      } else {
        setTitle(singleNew.title)
        setSubtitle(singleNew.subtitle)
        setImage(singleNew.image)
        setBody(singleNew.body)
        setCategory(singleNew.category)
      }
    }
  }, [dispatch, history, singleNewId, singleNew, successUpdate])

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
        _id: singleNewId,
        title,
        subtitle,
        image,
        body,
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
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='title'>
              <Form.Label>Título</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ingrese título de la noticia'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='subtitle'>
              <Form.Label>Copete</Form.Label>
              <Form.Control
                type='string'
                placeholder='Ingrese copete'
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ingrese URL de imagen'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Elegir archivo'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='body'>
              <Form.Label>Cuerpo de la noticia</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ingresar cuerpo de la noticia'
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ingresar categoría'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default NewsEditScreen
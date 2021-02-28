import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listNews } from '../actions/newsActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const newsList = useSelector((state) => state.newsList)
  const { loading, error, news } = newsList

 

  useEffect(() => {
    dispatch(listNews())
  }, [dispatch])

  return  loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Container>
    <Carousel pause='hover' className='bg-dark' id="noticias">
      {news.map((singleNew) => (
        <Carousel.Item key={singleNew._id}>
          <Link to={`/noticias/${singleNew._id}`}>
            <Image src={singleNew.image} alt={singleNew.name} fluid />
            <Carousel.Caption className='carousel-caption'>
             <h2>{singleNew.title}</h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  </Container>
  )
}

export default ProductCarousel
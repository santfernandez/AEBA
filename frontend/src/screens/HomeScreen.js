import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import News from '../components/News';
import Message from '../components/Message';
import Loader from '../components/Loader';
import ProductCarousel from '../components/Carousel'
import Billboard from '../components/Billboard'
import { listNews } from '../actions/newsActions'
import Snippet from '../components/Snippet'
import Cards from '../components/Cards'

const HomeScreens = () => {
    const dispatch = useDispatch()

    const newsList = useSelector(state => state.newsList)
    const { loading, error, news } = newsList

    useEffect(() => {
        dispatch(listNews())
    }, [dispatch])

    return (
        <>
            <Billboard />
            <Snippet />
            <ProductCarousel />
            <Cards />
        </>
    )
}

export default HomeScreens;
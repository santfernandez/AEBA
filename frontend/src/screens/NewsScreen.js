import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Jumbotron } from 'react-bootstrap';
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listNews, listNewsDetails } from '../actions/newsActions'
import Styles from './NewsScreen.css'


const NewsScreen = ( { match } ) => {
    const dispatch = useDispatch()
    
    const newsDetails = useSelector(state => state.newsDetails)
    const { loading, error, news } = newsDetails

    useEffect(() => {
       dispatch(listNewsDetails(match.params.id))
    }, [dispatch, match])

    return (
        <>
            {loading ? 
            <Loader /> : 
            error ? 
            <Message variant='danger'>{error}</Message> :
            <Row>
                <Col className="mt-4" md={12}>
                <Jumbotron className="bg-info">
                    <p className="text-primary">{news.updatedAt}</p>
                    <h1>{news.title}</h1>
                    <p className="text-primary">{news.subtitle}</p>
                </Jumbotron>
                </Col>
                <Col md={12}>
                    <Image className='news-image mb-4' src={news.image} alt={news.name} fluid/>
                    <Jumbotron className="news-body">
                        <p className="text-primary">{news.body}</p>
                        <p className="text-primary">{news.body2}</p>
                        <p className="text-primary">{news.body3}</p>
                        <p className="text-primary">{news.body4}</p>
                        <p className="text-primary">{news.body5}</p>
                        <p className="text-primary">{news.body6}</p>
                        <p className="text-primary">{news.body7}</p>
                        <p className="text-primary">{news.body8}</p>
                    </Jumbotron>
                </Col>
            </Row> } 
            
        </>
    )
}

export default NewsScreen;

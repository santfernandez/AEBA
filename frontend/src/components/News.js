import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const News = ( { news } ) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/new/${news._id}`}>
                <Card.Img src={news.image} variant='top' />
            </Link>
            
            <Card.Body>
                <Link to={`/new/${news._id}`}>
                    <Card.Title as='div'>
                        <strong>{news.title}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <div className='my-3'>
                        {news.ratings} from {news.numReviews} reviews
                    </div>
                </Card.Text>
                <Card.Text as='h3'>${news.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default News

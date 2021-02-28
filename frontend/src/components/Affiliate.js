import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Affiliate = () => {
    return (
        <Container className="container bg-warning d-flex flex-column f-wrap mt-5">
            <h1 className="text-center text-light mt-5 mb-5 pt-3">¿Querés formar parte de AEBA?</h1>
            <Link to='/googleform' className="text-center mb-5">
                <Button className="btn-secondary btn-aff">HACÉ CLICK ACÁ</Button>
            </Link>
        </Container>
    )
}

export default Affiliate

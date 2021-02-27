import React from 'react'
import { Card, CardDeck, Container } from 'react-bootstrap'
import Bandera from '../images/flag1.png'
import Equipo from '../images/team1.png'
import Manos from '../images/collaboration1.png'

const Cards = () => {
    return (
        <Container>
            <CardDeck className="cards-section">
                <Card className='each-card'>
                    <Card.Img className="bandera-card-icon" variant="top" src={Bandera} />
                    <Card.Body>
                    <Card.Title><h3 className="text-center">REPRESENTACIÓN</h3></Card.Title>
                    <Card.Text>
                        <p className="text-center">Nuestra principal función es la de bregar por un sistema educativo igualitario, robusto, moderno, que respete, amplíe y cumpla con los derechos de sus trabajadores.</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='each-card'>
                    <Card.Img className="equipo-card-icon" variant="top" src={Equipo} />
                    <Card.Body>
                    <Card.Title><h3 className="text-center">CONCIENCIA SOCIAL</h3></Card.Title>
                    <Card.Text>
                        <p className="text-center">Involucrados con el tejido social, este sindicato docente asume a la educación como un instrumento de ascenso social.</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='each-card'>
                    <Card.Img className="manos-card-icon" variant="top" src={Manos} />
                    <Card.Body>
                    <Card.Title><h3 className="text-center">ACOMPAÑAMIENTO</h3></Card.Title>
                    <Card.Text>
                        <p className="text-center">Buscamos proponer y mantener una discusión integral sobre las condiciones de enseñanza y aprendizaje.</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
</CardDeck>
        </Container>
    )
}

export default Cards

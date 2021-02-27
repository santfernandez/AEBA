import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

 
const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const redirect = location.search ? location.search.split('=')[1] : '/gestionarnoticias'

    const dispatch = useDispatch()
    
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    useEffect(() => {
        if(userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1>ADMIN</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Dirección de correo</Form.Label>
                    <Form.Control 
                        type='email' 
                        placeholder='Ingrese dirección de correo'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder='Ingrese contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                        </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Ingrese
                </Button>
            </Form> 
        </FormContainer>
)
}

export default LoginScreen

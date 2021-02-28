import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {
  listNews,
  deleteNews,
  _createNews
} from '../actions/newsActions'
import { NEWS_CREATE_RESET } from '../constants/newsConstants'

const ManageNewsScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const newsList = useSelector((state) => state.newsList)
  const { loading, error, news, page, pages } = newsList

  const newsDelete = useSelector((state) => state.newsDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = newsDelete

  const newsCreate = useSelector((state) => state.newsCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    news: createNews,
  } = newsCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: NEWS_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login')
    }

    if (successCreate) {
      history.push(`/gestionarnoticias/${createNews._id}/edit`)
    } else {
      dispatch(listNews('', pageNumber))
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createNews,
    pageNumber,
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteNews(id))
    }
  }

  const createNewsHandler = () => {
    dispatch(_createNews())
  }
  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Noticias</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createNewsHandler}>
            <i className='fas fa-plus'></i> Agregar Noticia
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>TÍTULO</th>
                <th>COPETE</th>
                <th>CATEGORÍA</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {news.map((singleNew) => (
                <tr key={singleNew._id}>
                  <td>{singleNew._id}</td>
                  <td>{singleNew.title}</td>
                  <td>${singleNew.subtitle}</td>
                  <td>{singleNew.category}</td>
                  <td>
                    <LinkContainer to={`/gestionarnoticias/${singleNew._id}/editar`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(singleNew._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </>
  )
}

export default ManageNewsScreen
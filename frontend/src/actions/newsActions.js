import axios from 'axios'
import {  NEWS_LIST_REQUEST, 
          NEWS_LIST_SUCCESS, 
          NEWS_LIST_FAIL, 
          NEWS_DETAILS_REQUEST, 
          NEWS_DETAILS_SUCCESS, 
          NEWS_DETAILS_FAIL,
          NEWS_DELETE_REQUEST, 
          NEWS_DELETE_SUCCESS, 
          NEWS_DELETE_FAIL,
          NEWS_CREATE_REQUEST,
          NEWS_CREATE_SUCCESS,
          NEWS_CREATE_FAIL,
          NEWS_UPDATE_REQUEST,
          NEWS_UPDATE_SUCCESS,
          NEWS_UPDATE_FAIL,
} from '../constants/newsConstants'
import { logout } from '../actions/userActions'

export const listNews = ( ) => async (dispatch) => {
    try {
        dispatch({ type: NEWS_LIST_REQUEST, })

        const { data } = await axios.get('/api/noticias'
        )

        dispatch({ 
            type: NEWS_LIST_SUCCESS,
            payload: data,
         })
    } catch (error) {
        dispatch({
            type: NEWS_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const listNewsDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: NEWS_DETAILS_REQUEST })
  
      const { data } = await axios.get(`/api/noticias/${id}`)
  
      dispatch({
        type: NEWS_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: NEWS_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

console.log(listNewsDetails)

export const deleteNews = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/noticias/${id}`, config)

    dispatch({
      type: NEWS_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
     }
}

export const _createNews = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/noticias`, {}, config)

    dispatch({
      type: NEWS_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: NEWS_CREATE_FAIL,
      payload: message,
    })
  }
}


export const updateNews = (news) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/noticias/${news._id}`,
      news,
      config
    )

    dispatch({
      type: NEWS_UPDATE_SUCCESS,
      payload: data,
    })
    dispatch({ type: NEWS_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: NEWS_UPDATE_FAIL,
      payload: message,
    })
  }
}
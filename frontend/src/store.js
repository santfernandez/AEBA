import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { newsListReducer, newsDetailsReducer, newsDeleteReducer, newsCreateReducer, newsUpdateReducer } from './reducers/newsReducers'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
    newsList: newsListReducer,
    newsDetails: newsDetailsReducer,
    newsDelete: newsDeleteReducer,
    newsCreate: newsCreateReducer,
    newsUpdate: newsUpdateReducer,
    userLogin: userLoginReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

console.log(store.getState())
export default store
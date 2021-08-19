import { createStore, combineReducers, applyMiddleware } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import userInfoReducer from './reducers/userInfoReducer'


const reducer = combineReducers({

  notifications: notificationReducer,
  blogs: blogReducer,
  users: userReducer,
  userInfo: userInfoReducer

})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
export default store
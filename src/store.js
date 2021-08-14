import { createStore, combineReducers, applyMiddleware } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const reducer = combineReducers({

  notifications: notificationReducer
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
export default store
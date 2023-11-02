import { combineReducers } from 'redux'
import productsReducer from './products-reducer'
import alertReducer from './alert-reducer'

export default combineReducers({
  products: productsReducer,
  alert: alertReducer
})

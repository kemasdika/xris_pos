import {createStore, combineReducers, applyMiddleware} from 'redux'
import {UserReducer} from './_reducers/UserReducer'
import {productReducer} from './_reducers/ProductReducer'
import {CartReducer} from './_reducers/CartReducer'
import {PaymentReducer} from './_reducers/PaymentReducer'
import thunk from 'redux-thunk'
const rootReduser = combineReducers({
    user: UserReducer,
    product: productReducer,
    cart: CartReducer,
    payment: PaymentReducer
})

export const store = createStore(rootReduser, applyMiddleware(thunk))

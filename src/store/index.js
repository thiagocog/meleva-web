import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import multi from 'redux-multi'


// IMPORTAÇÃO DOS REDUCERS
import { reducer as toastrReducer } from 'react-redux-toastr'
import SignReducer from './auth/auth.reducer'



const reducers = combineReducers({
    auth: SignReducer,
    toastr: toastrReducer
})

// MIDDLEWARES DE REDUX
const middlewares = [thunk, multi]

// COMPOSE (UNE OS MIDDLEWARES E FERRAMENTAS DE DEBUG)
const compose = composeWithDevTools(applyMiddleware(...middlewares))

// CRIANDO A STORE
const store = createStore(reducers, compose)

export default store
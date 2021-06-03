import TYPES from '../types'
import { getToken, getUser } from '../../config/storage'

const INITIAL_STATE = {
    lading: false,
    token: getToken() || '',
    user: getUser() || {},
    error: [],
    registered: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.SIGN_LOADING:
            state.error = []
            state.loading = action.status
            return state
        case TYPES.SIGN_IN:
            state.token = action.data.token
            state.user = action.data.usuarioDTO
            state.loading = false
            return state
        case TYPES.SIGN_UP:
            state.token = action.data.token
            state.user = action.data.usuario
            state.loading = false
            return state
        case TYPES.SIGN_ERROR:
            const err = [...state.error, action.data]
            state.loading = false
            state.error = err
            return state
        case TYPES.SIGN_OUT:
            state.token = ''
            state.user = {}
            state.error = []
            return state
        default:
            return state
    }
}

export default reducer
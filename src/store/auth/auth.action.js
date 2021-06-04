import { navigate } from '@reach/router'
import { removeToken, saveAuth } from '../../config/storage'
import { authService } from '../../services/auth.service'
import http from '../../config/http'
import TYPES from '../types'


export const signInAction = (data) => {

    return async (dispatch) => {
        dispatch({
            type: TYPES.SIGN_LOADING,
            status: true
        })
        try {
            const result = await authService(data)
            console.log('##### RESULT: ', result.data.data)

            if (result.data) {
                saveAuth(result.data?.data)
                http.defaults.headers.token = result.data.data.token
            }
            
            dispatch({
                type: TYPES.SIGN_IN,
                data: result.data?.data
            })

            navigate('/dash')

        } catch (error) {
            dispatch({
                type: TYPES.SIGN_ERROR,
                data: error
            })
        }
    }

}

export const logoutAction = (data) => {
    return async (dispatch) => {
        removeToken()
        dispatch({
            type: TYPES.SIGN_OUT
        })
        navigate('/')
    }
}
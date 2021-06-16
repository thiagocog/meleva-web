import {
    create as ClienteCreate,
    getAll as getAllCliente 
} from '../../services/cliente.service'
import TYPES from '../types'
import { toastr } from 'react-redux-toastr'
import { navigate } from '@reach/router'


export const create = (data) => {
    return async (dispatch) => {
        try {
            const result = await ClienteCreate(data)
            toastr.success('Cliente', 'Cliente cadastrado com sucesso')
            navigate('/signin')
        } catch (error) {
            toastr.error('Cliente', 'Erro ao cadastrar o cliente')
        }
    }
}


export const getAll = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: TYPES.CLIENTE_LOADING, status: true })
            const result = await getAllCliente()
            dispatch({ type: TYPES.CLIENTE_ALL, data: result.data.data })
        } catch (error) {
            toastr.error('aconteceu um erro', error)
        }
    }
}
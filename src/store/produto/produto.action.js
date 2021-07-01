import {
    create as createProduto,
    getAll as getAllProduto,
    remove as removeProduto
} from '../../services/produto.service'
import TYPES from '../types'
import { toastr } from 'react-redux-toastr'


export const create = (data) => {
    return async (dispatch, getState) => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function (progressEvent) {
                const percent = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                )
                dispatch({
                    type: TYPES.PRODUTO_UPLOAD,
                    upload: {
                        finish: percent === 100,
                        percent: percent
                    }
                })
            }
        }
        try {
            const formData = new FormData()
            Object.keys(data).map((k) => formData.append(k, data[k]))
            const fornecedorId = getState().auth.user.id
            // const result = await createProduto(fornecedorId, formData, config)
            const result = await createProduto(fornecedorId, data, config)
            dispatch({ type: TYPES.PRODUTO_CREATE, data: result.data })
            toastr.success('Produto', 'Produto cadastrado com sucesso')
            dispatch(getAll())
            
        } catch (error) {
            toastr.error('Produto', 'Falha ao cadastrar produto.')
        }
    }
}


export const getAll = (query = null) => {
    return async (dispatch) => {
        try {
            dispatch({ type: TYPES.PRODUTO_LOADING, status: true })
            const result = await getAllProduto(query)
            dispatch({ type: TYPES.PRODUTO_ALL, data: result.data.data })
        } catch (error) {
            toastr.error('Aconteceu um erro ao listar todos os produtos', error)
        }
    }
}


export const remove = (id) => {
    return async (dispatch) => {
        try {
            const result = await removeProduto(id)
            dispatch({ type: TYPES.PRODUTO_EDIT, data: result.data })
            toastr.success('Produto', 'Produto removido com sucesso')
            dispatch(getAll())
        } catch (error) {
            toastr.error('aconteceu um erro ao remover o produto', error)
            toastr.error('Produto', error.toString())
        }
    }
}
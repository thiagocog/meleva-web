import {
    create as fornecedorCreate,
    getAll as getAllFornecedor,
    getById as getFornecedorById,
    update as updateFornecedor,
    remove as removeFornecedor,
    obterListadeProduto,
    ativarFornecedor,
    inativaFornecedor,
    likeProdutoService
} from '../../services/fornecedor.service'
import TYPES from '../types'
import { toastr } from 'react-redux-toastr'
import { navigate } from '@reach/router'



export const create = (data) => {
    return async (dispatch) => {
        try {
            const result = await fornecedorCreate(data)
            toastr.success('Cadastro Realizado', 'Um email será enviado quando o seu cadastro for confirmado pela nossa equipe')
            navigate('/signin')
        } catch (error) {
            toastr.error('Fornecedor', 'Erro ao cadastrar fornecedor')
        }
    }
}


export const edit = (id) => {
    return async (dispatch) => {
        dispatch({
            type: TYPES.FORNECEDOR_UPLOAD,
            upload: 0
        })
        try {
            const result = await getFornecedorById(id)
            dispatch({ type: TYPES.FORNECEDOR_EDIT, data: result.data })
        } catch (error) {
            toastr.error('Aconteceu um erro', error)
        }
    }
}


export const getAll = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: TYPES.FORNECEDOR_LOADING, status: true })
            const result = await getAllFornecedor()
            dispatch({ type: TYPES.FORNECEDOR_ALL, data: result.data.data })
        } catch (error) {
            toastr.error('aconteceu um erro', error)
        }
    }
}


export const update = ({ id, ...data }) => {
    return (dispatch) => {
        dispatch({ type: TYPES.FORNECEDOR_LOADING, status: true })
        dispatch({ type: TYPES.FORNECEDOR_UPLOAD, upload: 0 })
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function (progressEvent) {
                const percentCompleted = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                )
                dispatch({
                    type: TYPES.FORNECEDOR_UPLOAD,
                    upload: percentCompleted
                })
            }
        }
        const formData = new FormData()
        Object.keys(data).map((k) => formData.append(k, data[k]))
        updateFornecedor(id, formData, config)
            .then((result) => {
                dispatch(edit(id))
                dispatch(getAll())
                toastr.success('Fornecedor', 'Fornecedor atualizado com sucesso')
                dispatch({ type: TYPES.FORNECEDOR_UPDATE })
            })
            .catch((error) => {
                dispatch({ type: TYPES.SIGN_ERROR, data: error })
                toastr.error('Fornecedor', error.toString())
            })
    }
}


export const remove = (id) => {
    return async (dispatch) => {
        try {
            const result = await removeFornecedor(id)
            dispatch({ type: TYPES.FORNECEDOR_EDIT, data: result.data })
            toastr.success('Fornecedor', 'Removido com sucesso')
            dispatch(getAll())
        } catch (error) {
            toastr.error('aconteceu um erro', error)
            toastr.error('Fornecedor', error.toString())
        }
    }
}


export const setStatusFornecedor = (id, ativo) => {
    return async (dispatch, getState) => {
        let result
        try {
            if (ativo === 'Ativo') {
                result = await inativaFornecedor(id)
                toastr.success(
                    `Fornecedor ${result.data.data.nomeFantasia}`,
                    'Desativado com sucesso'
                )
            } else {
                result = await ativarFornecedor(id)
                toastr.success(
                    `Fornecedor ${result.data.data.nomeFantasia}`,
                    'Ativado com sucesso'
                )
            }
            const all = getState().fornecedor.all
            const index = all.findIndex((item) => item.id === id)
            all[index].status = result.data.data.status
            dispatch({ type: TYPES.FORNECEDOR_ALL, data: [...all] })
        } catch (error) {
            console.log('###', error)
        }
    }
}


export const obterProduto = (id) => {
    return async (dispatch) => {
        try {
            const result = await obterListadeProduto(id)
            dispatch({ type: TYPES.FORNECEDOR_PRODUTOS, data: result.data.data })
        } catch (error) {
            toastr.error('Fornecedor', 'Erro ao carregar produtos')
        }
    }
}


export const likeProduto = ({ nome, fornecedorId }) => {
    return async (dispatch) => {
        try {
            const result = await likeProdutoService(fornecedorId)
            toastr.success('Curtida', `O produto ${nome} foi curtido com sucesso.`)
        } catch (error) {
            toastr.error('Curtida', 'Erro ao curtir o produto')
        }
    }
}
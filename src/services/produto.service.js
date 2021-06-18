import http from '../config/http'
import { parsedToQuery } from '../utils/helpers'

const baseUrl = '/produto'


// SERVIÇOS

export const getAll = (query) => {
    const q = query ? parsedToQuery(query) : ''
    return http.get(`${baseUrl}?${q}`)
}

export const remove = (id) => http.delete(`${baseUrl}/${id}`)

export const create = (fornecedorId, data, config = {}) => http.post(`/fornecedor/${fornecedorId}/produto`, data, config)
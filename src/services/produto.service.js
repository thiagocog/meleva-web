import http from '../config/http'

const baseUrl = '/produto/'


// SERVIÇOS

export const getAll = () => http.get(baseUrl)

export const remove = (id) => http.delete(`${baseUrl}/${id}`)

export const create = (fornecedorId, data, config = {}) => http.post(`/fornecedor/${fornecedorId}/produto`, data, config)
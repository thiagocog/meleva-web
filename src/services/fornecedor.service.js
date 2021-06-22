import http from '../config/http'

const baseUrl = '/fornecedor'



// SERVIÇOS

export const getAll = () => http.get(baseUrl)

export const getById = (id) => http.get(`${baseUrl}/${id}`)

export const update = (id, data, config = {}) => http.put(`${baseUrl}/${id}`, data, config)

export const remove = (id) => http.delete(`${baseUrl}/${id}`)

export const create = (data) => http.post(baseUrl, data)

export const ativarFornecedor = (id) => http.put(`${baseUrl}/${id}/ativa`)

export const inativaFornecedor = (id) => http.put(`${baseUrl}/${id}/inativa`)

export const obterListadeProduto = (id) => http.get(`${baseUrl}/${id}/produto`)

export const likeProdutoService = (idFornecedor) => http.post(`${baseUrl}/${idFornecedor}/curtidas`)

export const removeProduto = (idFornecedor, produtoId) => http.delete(`${baseUrl}/${idFornecedor}/produto/${produtoId}`)
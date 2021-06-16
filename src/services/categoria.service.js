import http from '../config/http'
const baseUrl = '/categoria'


// SERVIÇOS

export const getAllCategories = () => http.get(baseUrl)

export const getCategoryById = (id) => http.get(`${baseUrl}/${id}`)

export const updateCategory = (id, data, config = {}) => http.put(`${baseUrl}/${id}`, data, config)

export const removeCategory = (id) => http.delete(`${baseUrl}/${id}`)

export const categoryCreate = (data, config = {}) => http.post(baseUrl, data, config)

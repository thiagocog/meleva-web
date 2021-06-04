import axios from 'axios'
import { getToken } from './storage'
import store from '../store'
import { logoutAction } from '../store/auth/auth.action'

const { REACT_APP_VERSION: version, REACT_APP_API: api } = process.env
const urlApi = api + version


const http = axios.create({
    baseURL: urlApi
})

http.defaults.headers['content-type'] = 'application/json'
if (getToken()) {
    http.defaults.headers.token = getToken()
}

http.interceptors.response.use(
    (response) => response,
    (error) => {
        switch (error.response.status) {
            case 401:
                store.dispatch(logoutAction())
                break
            default:
                break
        }
    }
)

export default http
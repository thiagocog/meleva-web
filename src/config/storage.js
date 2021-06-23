const TOKEN_KEY = process.env.REACT_APP_STORAGE_KEY || 'gestao_meleva'


const getToken = () => {

    const data = JSON.parse(localStorage.getItem(TOKEN_KEY))

    if (data && data.token) {
        return data.token
    } else {
        return false
    }

}

const getUser = () => {

    const data = JSON.parse(localStorage.getItem(TOKEN_KEY))

    if (data && data.usuarioDTO) {
        return data.usuarioDTO
    } else {
        return false
    }

}

const isAuthenticated = () => {
    return getToken() !== false
}

const clearStorage = () => {
    return localStorage.removeItem(TOKEN_KEY)
}

const saveAuth = (data) => {
    return localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
}


export {
    getToken,
    getUser, 
    isAuthenticated,
    clearStorage,
    saveAuth
}
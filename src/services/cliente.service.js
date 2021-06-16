import http from '../config/http'
const baseUrl = '/cliente'


// SERVIÇOS

export const getAll = () => ({
    data: {
        data: [
            {
                id: '1',
                nome: 'Seu Madruga',
                nascimento: '20/07/1965',
                uf: 'RJ',
                cidade: 'Niterói',
                email: 'seumadruga@email.com'
            },
            {
                id: '2',
                nome: 'Seu Barriga',
                nascimento: '20/07/1965',
                uf: 'RJ',
                cidade: 'São Gonçalo',
                email: 'seubarriga@email.com'
            }
        ]
    }
})

export const create = (data) => http.post(baseUrl, data)
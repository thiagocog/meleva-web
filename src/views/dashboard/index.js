import { Router } from '@reach/router'

import { useSelector } from 'react-redux'


import DashLayout from '../../components/DashLayout'
import Fornecedor from './fornecedor'
// import Categoria from './categoria/'
// import Produto from './produto/'
// import Cliente from './cliente/'



// 1 - Administrador
// 2 - Fornecedor
// 3 - Cliente

export const Menu = [
    {
        title: 'Fornecedores',
        icon: '',
        route: '/',
        visibleMenu: true,
        enabled: true,
        component: Fornecedor,
        authorization: [1, 2]
    },
    {
        title: 'Categorias',
        icon: '',
        route: '/categoria',
        visibleMenu: true,
        enabled: true,
        // component: Categoria,
        authorization: [2]
    },
    {
        title: 'Produtos',
        icon: '',
        route: '/produto',
        visibleMenu: true,
        enabled: true,
        // component: Produto,
        authorization: [2]
    },
    {
        title: 'Cliente',
        icon: '',
        route: '/cliente',
        visibleMenu: true,
        enabled: true,
        // component: Cliente,
        authorization: [2]
    }
]



const Dashboard = (props) => {
    const tipoUsuario = useSelector((state) => state.auth.user.tipoUsuario)

    const rotasAutorizadas = Menu.filter((route) => 
        route.authorization.includes(tipoUsuario)
    )

    const NotFound = () => <h2>Não autorizado</h2>


    return (
        <DashLayout path='/'>
            <Router>
                {rotasAutorizadas.map(({ component: Component, route }, i) => (
                    <Component key={i} path={route} />
                ))}
                <NotFound default />
            </Router>
        </DashLayout>
    )
}

export default Dashboard
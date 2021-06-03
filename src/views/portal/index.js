import React from 'react'
import { Router } from '@reach/router'
import Layout from '../../components/Layout'
import Home from './home/home'
import Produto from './produto/produto'


const Menu = [
    {
        title: 'Home',
        icons: '',
        route: '/',
        visibleMenu: true,
        enabled: true,
        component: Home
    },
    {
        title: 'Produtos',
        icons: '',
        route: '/produto',
        visibleMenu: true,
        enabled: true,
        component: Produto
    }
]

const Portal = (props) => {
    return (
        <Layout path='/'>
            <Router>
                {Menu.map(({ component: Component, route}, i) => (
                    <Component key={i} path={route} />
                ))}
            </Router>
        </Layout>
    )
}

export default Portal
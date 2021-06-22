import React from 'react'
import { Router, Redirect } from '@reach/router'

import { isAuthenticated } from './config/storage'


// IMPORTAÇÃO DAS VIEWS
import Portal from './views/portal/'
import Dashboard from './views/dashboard/'
import SignIn from './views/auth/signin'
import SignUpFornecedor from './views/auth/fornecedor_novo'
// -----------


// PRIVAÇÃO DE ROTA
const PrivateRoute = ({ component: Component, ...rest }) => {
    if (!isAuthenticated()) {
        return <Redirect to='/signin' noThrow />
    } else {
        return <Component {...rest} />
    }
}


const Routers = () => {

    return (
        <Router>
            <SignIn path='/signin' />
            <SignUpFornecedor path='/fornecedor_novo' />

            <Portal path='/*' />

            <PrivateRoute path='/dash/*' component={Dashboard} />
        </Router>
    )
}

export default Routers
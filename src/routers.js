import React from 'react'
import { Router, Redirect } from '@reach/router'

import { isAuthenticated } from './config/storage'


// IMPORTAÇÃO DAS VIEWS
import Portal from './views/portal/'
import Dashboard from './views/dashboard/'
import SignIn from './views/auth/signin'
// -----------


// PRIVAÇÃO DE ROTA
const PrivateRoute = ({ component: Component, ...rest }) => {
    if (!isAuthenticated()) {
        return <Redirect to='/signin' noTthrow />
    } else {
        return <Component {...rest} />
    }
}


const Routers = () => {

    return (
        <Router>
            <SignIn path='/signin' />

            <Portal path='/*' />

            <PrivateRoute path='/dash/*' component={Dashboard} />
        </Router>
    )
}

export default Routers
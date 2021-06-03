import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Main>{children}</Main>
        </>
    )
}

export default Layout

const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0 auto;
    margin-top: 90px;
`

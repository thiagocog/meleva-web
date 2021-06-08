import React from 'react'
import styled from 'styled-components'

 

const DashControl = () => {

    const toggleNav = (event) => {
        document.querySelector('.nav').classList.toggle('nav-close')
        document.querySelector('.dash-header').classList.toggle('nav-close')
    }


    return (
        <LayoutDashControl>
            <Nav className="nav"></Nav>
            <DashHeader className="dash-header">
                <button onClick={toggleNav}>Toggle</button>
                Dashboard
            </DashHeader>
            
        </LayoutDashControl>
    )
}

export default DashControl


const LayoutDashControl = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
`

const DashHeader = styled.header`
    height: 10vh;
    width: 84vw;
    background-color: ${(props) => props.theme.colors.secondary};
    transition: 0.5s;

    &.nav-close {
        width: 100vw;
    }
`

const Nav = styled.div`
    height: 100vh;
    width: 16vw;
    background-color: ${(props) => props.theme.colors.secondary};
    transition: 0.5s;

    &.nav-close {
        margin-left: -16vw;
    }
`
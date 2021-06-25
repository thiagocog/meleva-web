import React from 'react'
import styled from 'styled-components'
// import { MdPlaylistPlay } from 'react-icons/md'
import { CgChevronDoubleRight } from 'react-icons/cg'
import { CgChevronDoubleLeft } from 'react-icons/cg'

 

const DashControl = ({ children }) => {

    const [navClosed, setNavClosed] = React.useState(true)

    const toggleNav = (event) => {

        setNavClosed(!navClosed)

        // document.querySelector('.nav').classList.toggle('nav-close')
        // document.querySelector('.dash-header').classList.toggle('nav-close')
        // document.querySelector('.dash-children').classList.toggle('nav-close')
    }


    return (
        <LayoutDashControl>
            <DashHeader className={navClosed && 'nav-close'}>
                <div className="header-button" onClick={toggleNav}>
                    {navClosed ? 
                        <CgChevronDoubleRight /> : 
                        <CgChevronDoubleLeft /> 
                    }
                    <span>Dashboard</span>
                </div>
            </DashHeader>
            <Nav className={navClosed && 'nav-close'}></Nav>
            <ChildrenDash className={navClosed && 'nav-close'}>{children}</ChildrenDash>
        </LayoutDashControl>
    )
}

export default DashControl


const LayoutDashControl = styled.div`
    position: relative;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;

    .navbar-toggler-icon {
        color: black;
    }
`

const DashHeader = styled.header`
    margin-left: 16vw;
    height: 10vh;
    width: 84vw;
    background-color: ${(props) => props.theme.colors.secondary};
    transition: 0.5s;

    .header-button {
        cursor: pointer;
        color: ${(props) => props.theme.colors.offblack};
        font-size: 1.5rem;

        span {
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bolder;
            font-size: 1.2rem;
        }
    }

    &.nav-close {
        width: 100vw;
        margin-left: 4vw;

    }
`

const Nav = styled.div`
    position: fixed;
    left: 0;
    min-height: 100vh;
    width: 16vw;
    background-color: ${(props) => props.theme.colors.secondary};
    transition: 0.5s;

    &.nav-close {
        margin-left: -12vw;
    }
`

const ChildrenDash = styled.div`
    min-height: 90vh;
    margin-left: 16vw;
    transition: 0.5s;

    &.nav-close {
        margin-left: 4vw;

    }
`
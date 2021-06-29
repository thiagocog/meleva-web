import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { CgChevronDoubleRight } from 'react-icons/cg'
import { CgChevronDoubleLeft } from 'react-icons/cg'
import {
    UncontrolledDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    NavLink,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import { logoutAction } from '../store/auth/auth.action'
 

const DashControl = ({ children }) => {
    const dispatch = useDispatch()

    const nomeUsuario = useSelector((state) => state.auth.user.nome)

    const [navClosed, setNavClosed] = React.useState(true)

    const toggleNav = (event) => {
        setNavClosed(!navClosed)
    }

    const logout = () => {
        dispatch(logoutAction())
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
                <_UncontrolledDropdown setActiveFromChild>
                    <DropdownToggle tag="a" className="nav-link" caret>
                        {nomeUsuario}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem tag={Link} to="/">Portal</DropdownItem>
                        <DropdownItem onClick={logout}>Sair</DropdownItem>
                    </DropdownMenu>
                </_UncontrolledDropdown>
            </DashHeader>
            <Nav className={navClosed && 'nav-close'}>
                <ul>
                    <li><_NavLink tag={Link} to='/dash/categoria'>Categorias</_NavLink></li>
                    <li><_NavLink tag={Link} to='/dash/fornecedor'>Fornecedores</_NavLink></li>
                    <li><_NavLink tag={Link} to='/dash/produto'>Produtos</_NavLink></li>
                </ul>
            </Nav>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;

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
    display: flex;
    flex-direction: column;

    ul {
        margin-top: 11vh;
        padding-left: 0;
        overflow: hidden;

    }

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

const _NavLink = styled(NavLink)`
    color: ${(props) => props.theme.colors.gray} !important;
    font-size: 1rem;
    letter-spacing: 0.02rem;
    font-weight: bolder;
    margin-left: 10px;
    margin-bottom: 10px;
    border-bottom: 2px solid transparent;
    border-top: 2px solid transparent;
    padding: .1rem .05rem !important;
    display: inline-block;

    :hover {
        border-bottom-color: ${(props) => props.theme.colors.gray};
    }
`

const _UncontrolledDropdown = styled(UncontrolledDropdown)`
    margin-left: 40px;
    cursor: pointer;
`
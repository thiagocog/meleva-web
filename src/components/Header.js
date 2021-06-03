import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import { isAuthenticated } from '../config/storage'



const Header = (props) => {

    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => setIsOpen(!isOpen);


    return (      
        <_Header className='container-fluid position-fixed'>
            <_Navbar light expand="md" className="container justify-content-between">
                <_Brand href="/"><img src="/images/logo.png" alt="Logo da Me leva" /></_Brand>
                <NavbarToggler onClick={toggle} />
                <_Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto navigation my-3" navbar>
                        <NavItem>
                            <_NavLink tag={Link} to="/">Home</_NavLink>
                        </NavItem>
                        <NavItem>
                            <_NavLink tag={Link} to="/">Seja um fornecedor</_NavLink>
                        </NavItem>
                        <NavItem>
                            <_NavLink className='login' tag={Link} to="signin">Login</_NavLink>
                        </NavItem>
                    </Nav>
                </_Collapse>
            </_Navbar>
        </_Header>        
    )
}

export default Header



const _Header = styled.header`
    height: auto;
    background-color: #F2F2F2;
`

const _Navbar = styled(Navbar)`
    border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
    /* display: flex; */
    box-sizing: border-box !important;
    max-height: 5.6rem;

    @media (max-width: 767px) {
        max-height: unset;
    }
`

const _Brand = styled(NavbarBrand)`
    

    img {
        width: 120px !important;
        height: auto !important;
    }

`

const _Collapse = styled(Collapse)`
    flex-grow: unset;
`

const _NavLink = styled(NavLink)`
    color: ${(props) => props.theme.colors.gray} !important;
    font-size: 1.05rem;
    letter-spacing: 0.05rem;
    font-weight: bolder;
    text-transform: uppercase;
    margin-left: 40px;
    align-items: right;
    justify-content: right !important;
    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;
    padding: .3rem .05rem !important;

    :hover {
        border-bottom-color: ${(props) => props.theme.colors.gray};
    }

    &.login {
        color: tomato !important;

        :hover {
            border-bottom-color: tomato;
        }
    }
`
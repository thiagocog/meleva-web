import React from 'react'
import styled from 'styled-components'

const Footer = (props) => {
    return (
        <_Footer className="container-fluid text-center">
            Me Leva - 2021 - Todos os direitos reservados
        </_Footer>
    )
}

export default Footer

const _Footer = styled.footer`
    background-color: ${(props) => props.theme.colors.gray};
    color: ${(props) => props.theme.colors.offwhite};
    padding: 1.5rem 0;
` 
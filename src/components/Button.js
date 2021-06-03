import React from 'react'
import styled from 'styled-components'

const Button = ({ text, ...props }) => {
    return (
        <_Button>
            {text}
        </_Button>
    )
}

export default Button

const _Button = styled.button`
    background-color: ${(props) => props.theme.colors.primary};
    padding: .6rem 0;
    width: 84%;
    color: ${(props) => props.theme.colors.offwhite};
    text-transform: uppercase;
    font-weight: bolder;
    letter-spacing: .1rem;
`

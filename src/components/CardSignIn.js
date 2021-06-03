import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const CardSignIn = () => {
    return (
        <Card className='text-center'>
            <p>Login</p>
            {/* <hr /> */}
            <form>
                <input type="text" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Senha" />
            </form>
            <Button text="Entrar" />

        </Card>
    )
}

export default CardSignIn

const Card = styled.div`
    background-color: ${(props) => props.theme.colors.offwhite};
    width: 30vw;
    border: 1px solid;
    box-shadow: 4px 4px 8px rgba(0,0,0,.5);
    padding-bottom: 3rem;

    p {
        font-size: 1.6rem;
        color: ${(props) => props.theme.colors.primary};
        font-weight: bold;
        letter-spacing: .1rem;
        margin: 2.4rem 0 1rem;
    }

    input {
        background-color: ${(props) => props.theme.colors.offwhite};
        display: block;
        font-size: .9rem;
        padding: 0 6px;
        margin: 30px auto;
        width: 84%;
        height: 40px;
        border-bottom: 2px solid ${(props) => props.theme.colors.secondary};

        ::placeholder {
            color: ${(props) => props.theme.colors.gray};
        }
    }
    
`

import React from 'react'
import styled from 'styled-components'

const CardSignIn = ({ change, form, submit, ...props }) => {
    return (
        <Card className='text-center col-12 col-md-8 col-lg-5'>
            <p>Login</p>
            {/* <hr /> */}
            <form>
                <input value={form.email || ''} type="text" name="email" placeholder="E-mail" onChange={change} />
                <input value={form.senha || ''} type="password" name="senha" placeholder="Senha" onChange={change} />
            </form>
            <_Button onClick={submit}>
                Entrar
            </_Button> 
        </Card>
    )
}

export default CardSignIn

const Card = styled.div`
    background-color: ${(props) => props.theme.colors.offwhite};
    /* width: 30vw; */
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

const _Button = styled.button`
    background-color: ${(props) => props.theme.colors.primary};
    padding: .6rem 0;
    width: 84%;
    color: ${(props) => props.theme.colors.offwhite};
    text-transform: uppercase;
    font-weight: bolder;
    letter-spacing: .1rem;
    cursor: pointer;
`

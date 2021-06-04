import React from 'react'
import styled from 'styled-components'
import CardSignIn from '../../components/CardSignIn'
import { signInAction } from '../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux'


const SignIn = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.auth.loading)

    // CONTROLE DE ESTADO DO FORMULÁRIO
    const [form, setForm ] = React.useState({
        email: 'thiago@admin.com',
        senha: '123456'
    })
    const handleChange = (props) => {
        const { name, value } = props.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const submitForm = () => {
        dispatch(signInAction(form))
    }


    return (
        <Body className="container-fluid p-5">
            <div className="container d-flex justify-content-center">
                <CardSignIn change={handleChange} form={form} submit={submitForm} />
            </div>
        </Body>
        
    )
}

export default SignIn

const Body = styled.div`
    height: 100vh;
    background-color: ${(props) => props.theme.colors.secondary};

    .container {
        margin-top: 80px;
    }
`
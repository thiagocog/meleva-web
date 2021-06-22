// importações externas
import React from 'react'
import { Link } from '@reach/router'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import styled from 'styled-components'

// importações internas
import UfCidade from '../../utils/estados-cidades.json'
import { create as createCliente } from '../../store/cliente/cliente.action'



const ClienteNovo = () => {
    const dispatch = useDispatch()
    const [uf, setUf] = React.useState([])
    const [cidades, setCidades] = React.useState([])
    const [form, setForm] = React.useState({})
    const loading = useSelector((state) => state.auth.loading)

    const handleChange = (props) => {
        const { name, value } = props.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const submitForm = () => {
        dispatch(createCliente(form))
    }

    React.useEffect(() => {
        const estados = UfCidade.estados.map(({ nome, sigla }) => ({ nome, sigla }))
        setUf(estados)
    }, [])

    React.useEffect(() => {
        const result = UfCidade.estados.find((item) => item.sigla === form.uf)
        if (result) {
            setCidades(result.cidades)
        }
    }, [form.uf])



    return (
        <Body>
            <Card className='text-center col-12 col-md-8 col-lg-5'>
                <p>Cadastre-se</p>
                <form>
                    <input 
                        name="nome" 
                        value={form.nome || ''}
                        placeholder='Nome' 
                        required
                        disabled={loading}
                        onChange={handleChange}
                    />
                    <InputMask
                        mask='99/99/9999'
                        value= {form.nascimento || ''}
                        disabled={false}
                        maskChar=" "
                        onChange={handleChange}
                    >
                        {() => (
                            <input
                                required
                                disabled={loading}
                                name='nascimento'
                                value={form.nascimento || ''}
                                placeholder='Data de Nascimento'
                            />
                        )}
                    </InputMask>
                    <div id="geolocalizacao">
                        <select
                            value={form.uf || ''}
                            onChange={handleChange}
                            name='uf'
                        >
                            <option value="">UF</option>
                            {uf?.map(({ nome, sigla }, i) => (
                                <option key={i} value={sigla}>
                                    {sigla}
                                </option>
                            ))}
                        </select>
                        <select
                            value={form.cidade || ''}
                            onChange={handleChange}
                            name='cidade'
                        >
                            <option value="">Cidade</option>
                            {cidades?.map((cidade, i) => (
                                <option key={i} value={cidade}>
                                    {cidade}
                                </option>
                            ))}
                        </select>              
                    </div>
                    <input
                        type='email'
                        name="email" 
                        value={form.email || ''}
                        placeholder='Email' 
                        required
                        disabled={loading}
                        onChange={handleChange}
                    />
                    <input
                        type='password'
                        name="senha" 
                        value={form.senha || ''}
                        placeholder='Senha' 
                        required
                        disabled={loading}
                        onChange={handleChange}
                    />
                    <_Button disabled={loading} onClick={submitForm}>
                        Cadastrar-se
                    </_Button> 
                </form>
                <div id='calllogin'>
                    <p>Já possui cadastro?&ensp;</p>
                    <Link to="/signin">Faça o login</Link>
                </div>            
            </Card>
        </Body>
    )
}



export default ClienteNovo

const Body = styled.div`
    height: 100vh;
    background-color: ${(props) => props.theme.colors.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

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
        margin: 2rem 0 1rem;
    }

    input {
        background-color: ${(props) => props.theme.colors.offwhite};
        display: block;
        font-size: .9rem;
        padding: 0 6px;
        margin: 18px auto;
        width: 84%;
        height: 40px;
        border-bottom: 2px solid ${(props) => props.theme.colors.secondary};

        ::placeholder {
            color: ${(props) => props.theme.colors.gray};
        }
    }

    #geolocalizacao {
        display: flex;
        margin: 18px auto;
        width: 84%;
        gap: 6%;

        select {
            height: 40px;
            background-color: ${(props) => props.theme.colors.offwhite};
            border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
            color: ${(props) => props.theme.colors.gray};
            font-size: .9rem;
            padding: 0 6px;
        }

        select[name='uf'] {
            flex: 1;
        }

        select[name='cidade'] {
            flex: 3;
        }
    }

    #calllogin {
        display: flex;
        width: 84%;
        margin: 20px auto 0;
        font-size: 0.9rem;

        a {
            color: ${(props) => props.theme.colors.gray};
            font-weight: bold;

            :hover {
                text-decoration: underline;
            }
        }
        

        p {
            margin: 0;
            font-size: 0.9rem;
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
    margin-top: 10px;
`
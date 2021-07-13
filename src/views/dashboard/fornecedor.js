// importações externas
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

// importações internas
import {
    getAll as getFornecedores,
    obterProduto,
    setStatusFornecedor
} from '../../store/fornecedor/fornecedor.action'
import FornecedorTable from '../../components/FornecedorTable'



const Fornecedor = () => {
    const dispatch = useDispatch()
    const [modalProduto, setModalProduto] = React.useState(false)
    const fornecedores = useSelector((state) => state.fornecedor.all)
    console.log('FORNECEDORES: ' + fornecedores)
    const loading = useSelector((state) => state.fornecedor.loading)

    const callFornecedor = React.useCallback(() => {
        dispatch(getFornecedores())
    }, [dispatch])

    React.useEffect(() => {
        callFornecedor()
    }, [callFornecedor])

    function toggleActive(id, status) {
        dispatch(setStatusFornecedor(id, status))
    }

    function openProdutos(fornecedor) {
        dispatch(obterProduto(fornecedor.id)).then(() => setModalProduto(true))
    }

    function actionModal({ id, fornecedor }) {
        const status = fornecedor.status === 'Ativo'
        return (
            <div>
                Oi
            </div>
        )
    }



    return (
        <Box className="container">
            <h4>Lista de Fornecedores</h4>
            <FornecedorTable fornecedores={fornecedores} toggleActive={toggleActive} loading={loading} />
        </Box>
    )
}


export default Fornecedor



const Box = styled.div`
    margin-top: 60px;

    h4 {
        font-family: arial,sans-serif;
        font-size: 2rem;
    }

    h4::after {
        content: '';
        display: block;
        background-color: ${(props) => props.theme.colors.offblack};
        width: 2rem;
        height: 2px;
        margin-top: .1rem;
        margin-bottom: 3rem;
        border-radius: 20px;
    }
`
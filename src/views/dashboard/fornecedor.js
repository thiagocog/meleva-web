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
        <Box>
            <FornecedorTable fornecedores={fornecedores} toggleActive={toggleActive} loading={loading} />
        </Box>
    )
}


export default Fornecedor



const Box = styled.div`
    padding: 40px;
`
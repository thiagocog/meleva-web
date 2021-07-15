// importações externas
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

// importações internas
import {
    getAll as getFornecedores,
    obterProduto,
    setStatusFornecedor
} from '../../store/fornecedor/fornecedor.action'
import FornecedorTable from '../../components/FornecedorTable'
import ProdutosPorFornecedorTable from '../../components/ProdutosPorFornecedorTable'



const Fornecedor = () => {
    const dispatch = useDispatch()
    // const [modalProduto, setModalProduto] = React.useState(false)



    const [modalProduto, setModalProduto] = React.useState({
        status: false,
        data: []
    })

    
    
    
    const fornecedores = useSelector((state) => state.fornecedor.all)
    console.log('FORNECEDORES: ' + fornecedores)
    const loading = useSelector((state) => state.fornecedor.loading)
    const produtosDoFornecedor = useSelector((state) => state.fornecedor.produtos)
    
    const callFornecedor = React.useCallback(() => {
        dispatch(getFornecedores())
    }, [dispatch])
    
    React.useEffect(() => {
        callFornecedor()
    }, [callFornecedor])
    
    
    
    
    function toggleActive(id, status) {
        dispatch(setStatusFornecedor(id, status))
    }
    
    const closeModal = () => setModalProduto({
        status: false,
        data: []
    })

    
    function openProdutos(fornecedor) {
        dispatch(obterProduto(fornecedor.id)).then(() => setModalProduto({
            status: true,
            data: produtosDoFornecedor
        }))


        
        // console.log('PRODUTOS DO FORNECEDOR', produtosDoFornecedor);
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
        <>
            <Box className="container">
                <h4>Lista de Fornecedores</h4>
                <FornecedorTable fornecedores={fornecedores} toggleActive={toggleActive} loading={loading} openProdutos={openProdutos} />
            </Box>
            <div>
                <Modal isOpen={modalProduto.status || false} toggle={closeModal}>
                    <_ModalHeader toggle={closeModal}>Produtos</_ModalHeader>
                    <ModalBody>
                        <ProdutosPorFornecedorTable data={modalProduto.data} />
                    </ModalBody>
                </Modal>
            </div>
        </>
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

const _ModalHeader = styled(ModalHeader)`
    span {
        padding: 5px 8px;
        background-color: ${(props) => props.theme.colors.secondary}
    }
`
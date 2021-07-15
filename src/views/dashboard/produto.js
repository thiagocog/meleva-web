// importações externas
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'


// importações internas
import {
    getAll as getAllPodutos,
    create as createProduto,
    remove as removeProduto
} from '../../store/produto/produto.action'
import { getAll as getAllCategories } from '../../store/categoria/categoria.action'
import FormProduto from '../../components/FormProduto'
import ProdutoTable from '../../components/ProdutoTable'
import { obterProduto } from '../../store/fornecedor/fornecedor.action'

// --------------------------------------------------------------------------


const Produto = () => {
    const dispatch = useDispatch()
    const [modalForm, setModalForm] = React.useState(false)
    const [modal, setModal] = React.useState({})
    const tipoUsuario = useSelector((state) => state.auth.user.tipoUsuario)
    const idUsuario = useSelector((state) => state.auth.user.id)
    // const produtos = useSelector((state) => state.produto.all)
    const produtosDoFornecedor = useSelector((state) => state.fornecedor.produtos)
    const loading = useSelector((state) => state.categoria.loading)
    const selected = useSelector((state) => state.categoria.selected)

    // console.log('PRODUTOS DESTE FORNECEDOR ' + JSON.stringify(produtosDoFornecedor));

    // console.log('ID DO USUÁRIO: ' + idUsuario)
    // const produtosDoUsuario = dispatch(obterProduto(idUsuario))
    // console.log('PRODUTOS DO USUÁRIO: ' + produtosDoUsuario);

    const callStart = React.useCallback(() => {
        dispatch(obterProduto(idUsuario))
        dispatch(getAllPodutos())
        dispatch(getAllCategories())
    }, [useDispatch])

    React.useEffect(() => {
        callStart()
    }, [callStart])

    // React.useEffect(() => {
    //     dispatch(obterProduto(idUsuario))
    // }, [callStart])

    function remove(produto) {
        dispatch(removeProduto(produto))
    }

    function viewImageColumn(props) {
        return (
            <Avatar src={process.env.REACT_APP_API + props.value} />
        )
    }

    function actions() {
        return (
            <_Button onClick={() => setModalForm(true)}>Novo</_Button>
        )
    }

    function handleSubmit(data) {
        dispatch(createProduto(data)).then(() => setModalForm(false))
    }


    return (
        <>
            <Box>
                <div className="control">
                    <h4>Meus produtos</h4>
                    <div>{actions()}</div>
                </div>
                <ProdutoTable produtos={produtosDoFornecedor} modal={modal} loading={loading} />
            </Box>

            <div>
                <Modal isOpen={modalForm} toggle={() => setModalForm(false)}>
                    <_ModalHeader toggle={() => setModalForm(false)}>Novo Produto</_ModalHeader>
                    <ModalBody>
                        <FormProduto submit={handleSubmit} />
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
}


export default Produto


const Avatar = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 50%;
`

const Box = styled.div`
    padding: 60px;
    min-width: 80vw;

    .control {
        display: flex;
        justify-content: space-between;
        padding-bottom: 5px;
        margin-bottom: 30px;
        align-items: center;
        /* border-bottom: thin solid ${(props) => props.theme.colors.offgray}; */
    }

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
        border-radius: 20px;
    }
`

const _ModalHeader = styled(ModalHeader)`
    span {
        padding: 5px 8px;
        background-color: ${(props) => props.theme.colors.secondary}
    }
`

const _Button = styled.button`
    
    padding: .6rem 1rem;
    /* font-weight: bolder; */
    cursor: pointer;
    border-radius: 8px;
    transition: .2s;
    border: 2px solid transparent;
    background-color: ${(props) => props.theme.colors.offwhite};
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.primary};

    &:hover {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.offwhite};
    }
`
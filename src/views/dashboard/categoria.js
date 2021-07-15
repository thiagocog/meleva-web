import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

import styled from 'styled-components'

import CategoryTable from '../../components/CategoryTable'
import FormCategory from '../../components/FormCategory'
import { 
    getAll as getCategories,
    edit as editCategory,
    create as createCategory,
    update as updateCategory,
    remove as removeCategory
} from '../../store/categoria/categoria.action'



const Categoria = () => {
    const dispatch = useDispatch()
    const [modal, setModal] = React.useState({})

    const categorias = useSelector((state) => state.categoria.all)
    console.log('CATEGORIAS: ' + categorias);
    const loading = useSelector((state) => state.categoria.loading)
    const selected = useSelector((state) => state.categoria.selected)


    const callCategoria = React.useCallback(() => {
        dispatch(getCategories())
    }, [dispatch])

    React.useEffect(() => {
       callCategoria()
    }, [callCategoria])

    const toggleModal = (tipo = 1, id = null) => {
        if (id) {
            dispatch(editCategory(id)).then(() => setModal({ tipo, id, status: true }))
        } else {
            setModal({ tipo, id, status: true })
        }
    }

    const closeModal = () => setModal({ status: false, tipo: 1 })

    const submitForm = (form) => {
        switch (modal.tipo) {
            case 1:
                dispatch(createCategory(form))
                return
            case 2:
                dispatch(updateCategory(form))
                return
            case 3:
                dispatch(removeCategory(modal.id)).then(() => setModal(false))
                return
            default:
                return false
        }
    }

    const actions = () => (
        <_Button onClick={() => toggleModal(1, null)}>
            Nova categoria
        </_Button>
    )



    return (
        <>
            <Box>
                <div className="control">
                    <h4>Categorias</h4>
                    <div>{actions()}</div>
                </div>
                <CategoryTable categorias={categorias} loading={loading} modal={toggleModal} />
            </Box>

            <div>
                <Modal isOpen={modal.status || false} toggle={closeModal}>
                    <_ModalHeader toggle={closeModal}>Categoria</_ModalHeader>
                    <ModalBody>
                        <FormCategory submit={submitForm} />
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
}


export default Categoria


const Box = styled.div`
    padding: 60px;
    min-width: 60vw;

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


const _ModalHeader = styled(ModalHeader)`
    span {
        padding: 5px 8px;
        background-color: ${(props) => props.theme.colors.secondary}
    }
`
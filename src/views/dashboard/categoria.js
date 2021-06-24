import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
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
        <_button onClick={() => toggleModal(1, null)}>
            Criar nova categoria
        </_button>
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
                    <ModalHeader toggle={closeModal}>Categoria</ModalHeader>
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
    padding: 40px;
`

const _button = styled.button`
    background-color: #f88;
`
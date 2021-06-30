import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const FormProduto = ({ submit, ...props }) => {
    const [preview, setPreview] = React.useState('')
    const [form, setForm] = React.useState({})
    const [isEdit, setEdit] = React.useState(false)
    const percent = useSelector((state) => state.categoria.upload?.percent || 0)
    const loading = useSelector((state) => state.categoria.loading)
    const categorias = useSelector((state) => state.categoria.all)

    if(Object.keys(props).length > 0 && !isEdit) {
        setPreview(process.env.REACT_APP_API + props?.data?.imagem)
        setForm(props.data)
        setEdit(true)
    }

    function handleChange(props) {
        const { name, value } = props.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSwitch = () => setForm({ ...form, status: !form.status })

    const handleSubmit = () => {
        submit(form)
    }

    const removeImage = () => {
        delete form.imagem
        setForm(form)
        setPreview('')
    }

    const previewImg = (props) => {
        const imagem = props.target.files[0]
        const url = URL.createObjectURL(imagem)
        setPreview(url)
        setForm({
          ...form,
          imagem
        })
    }



    return (
        <div>
            
        </div>
    )
}

export default FormProduto

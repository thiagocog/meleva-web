// importações externas
import React from 'react'
import styled from 'styled-components'

// importações internas
import { useSelector } from 'react-redux'



const FormCategory = ({ submit, ...props }) => {
    const [preview, setPreview] = React.useState('')
    const [form, setForm] = React.useState({
        status: false
    })
    const [isEdit, setEdit] = React.useState(false)
    const percent = useSelector((state) => state.categoria.upload?.percent || 0)
    const loading = useSelector((state) => state.categoria.loading)

    if (Object.keys(props).length > 0 && !isEdit) {
        setPreview(process.env.REACT_APP_API + props?.data?.imagem)
        setForm(props.data)
        setEdit(true)
    }

    const handleChange = (props) => {
        const { value, name } = props.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSwitch = () => setForm({ ...form, status: !form.status })

    const handleSubmit = () => {
        const newForm = {
            ...form,
            status: form.status.toString()
        }
        submit(newForm)
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
            {preview.length > 0 ?
            (
                <div sm={2} md={2} xl={2}>
                    <img src={preview} />
                    <button onClick={removeImage}>Remover</button>
                </div>
            ) : (
                <button>
                    Upload Foto
                    <input
                        // accept='image/*'
                        type='file'
                        name='imagem'
                        // hidden
                        onChange={previewImg}
                    />
                </button>
            )}
            <input
                required
                id='nome'
                name='nome'
                placeholder='Nome'
                value={form.nome || ''}
                onChange={handleChange}
                disabled={loading}
            />
            <textarea 
                name="descricao" 
                id="descricao" 
                cols="20" 
                rows="5"
                required
                disabled={loading}
                onChange={handleChange}
                value={form.descricao || ''}
            ></textarea>
            <div class="form-check form-switch">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="flexSwitchCheckChecked" 
                    checked={form.status}
                    onChange={handleSwitch}
                    name='status'
                    disabled={loading}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Status</label>
            </div>
            <button type='submit' onClick={handleSubmit} disabled={loading}>
                {isEdit ? 'Atualizar' : 'Enviar'}
            </button>

        </div>
    )
}

export default FormCategory
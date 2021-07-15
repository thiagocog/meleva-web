import React from 'react'
import { Table } from 'reactstrap'
import styled from 'styled-components'
import { BsList } from 'react-icons/bs'



const FornecedorTable = ({ fornecedores, toggleActive, loading, openProdutos, ...props }) => {

    
    return (
        <_Table>
            <thead>
                <tr>
                    <th>Nome Fantasia</th>
                    <th>Responsável</th>
                    <th>Email</th>
                    <th>Produtos</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {fornecedores && 
                fornecedores.map((fornecedor, i) => (
                <tr key={i}>
                    <td>{fornecedor.nomeFantasia}</td>
                    <td>{fornecedor.responsavel}</td>
                    <td>{fornecedor.email}</td>
                    <td><BsList onClick={() => openProdutos(fornecedor)} /></td>
                    <td>
                        <div className="form-check form-switch">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="flexSwitchCheckChecked" 
                                checked={fornecedor.status !== 'Ativo' ? false : true}
                                onChange={() => toggleActive(fornecedor.id, fornecedor.status)}
                                name='status'
                                disabled={loading}
                            />
                            {fornecedor.status === 'Ativo' ? 'Ativo' : 'Inativo'}
                        </div>
                    </td>
                    {/* <td>{categoria.status.toString()}</td> */}
                </tr>
                ))}
            </tbody>
        </_Table>
    )
}

export default FornecedorTable



const _Table = styled(Table)`

    td, th {
        padding: 10px 24px !important;
    }

`

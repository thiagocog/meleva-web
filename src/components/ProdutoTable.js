import React from 'react'
import { Table } from 'reactstrap'
import styled from 'styled-components'


const ProdutoTable = ({ produtos, modal, loading, ...props }) => {

    console.log('PRODUTOS: ', produtos)

    return (
        <Table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Imagem</th>
                </tr>
            </thead>
            <tbody>
                {produtos && 
                produtos.map((produto, i) => (
                <tr key={i}>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.descricao}</td>
                    <td>{produto.categoriaName}</td>
                    <td><_img src={process.env.REACT_APP_API + produto.imagem} /></td>
                </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ProdutoTable

const _img = styled.img`
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
`
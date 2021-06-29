import React from 'react';
import { Table } from 'reactstrap'
import styled from 'styled-components'



const CategoryTable = ({ categorias, modal, loading, ...props }) => {

  const actions = ({ id }) => {
    return (
      <>
        <p>ola</p>
      </>
    )
  }


  return (
    <Table>
      <thead>
        <tr>
          <th>Status</th>
          <th>Nome</th>
          <th>Imagem</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {categorias && 
        categorias.map((categoria, i) => (
          <tr key={i}>
            <td>{categoria.status.toString()}</td>
            <td>{categoria.nome}</td>
            <td><_img src={process.env.REACT_APP_API + categoria.imagem} /></td>
            <td>{categoria.nome}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CategoryTable;



const _img = styled.img`
  max-width: 80px;
  max-height: 80px;
`
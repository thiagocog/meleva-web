import React from 'react';
import { Table } from 'reactstrap';



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
            <td><img src={categoria.imagem} /></td>
            <td>{categoria.nome}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CategoryTable;
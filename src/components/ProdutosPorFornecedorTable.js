import React from 'react'

const ProdutosPorFornecedorTable = ({ data, ...props }) => {

  return (
    <div>
      <table>
        <thead>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Preço</th>
        </thead>
        <tbody>
          {data ? (data.map((produto, i) => (
            <tr key={i}>
              <td>{produto.nome}</td>
              <td>{produto.categoriaName}</td>
              <td>{produto.preco}</td>
            </tr>
          ))) : (
            <tr>
              <td>Este fornecedor não possui produtos cadastrados</td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
  )
}

export default ProdutosPorFornecedorTable

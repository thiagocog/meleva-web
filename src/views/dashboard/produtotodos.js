import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { getAll as getAllPodutos } from '../../store/produto/produto.action'
import { getAll as getAllCategories } from '../../store/categoria/categoria.action'
import ProdutoTable from '../../components/ProdutoTable'


const ProdutoTodos = () => {
  const dispatch = useDispatch()
  const produtos = useSelector((state) => state.produto.all)

  const callStart = React.useCallback(() => {
    dispatch(getAllPodutos())
    dispatch(getAllCategories())
  }, [useDispatch])

  React.useEffect(() => {
    callStart()
  }, [callStart])


  return (
    <>
      <Box>
        <div className="control">
            <h4>Produtos</h4>
        </div>
        <ProdutoTable produtos={produtos} />
      </Box>
    </>
  )
}


export default ProdutoTodos


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
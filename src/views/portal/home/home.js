import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import IntroHome from '../../../components/IntroHome'
import { getAll as getCategories } from '../../../store/categoria/categoria.action'
import CardCategory from '../../../components/CardCategory'

const Home = () => {
    const dispatch = useDispatch()
    const categorias = useSelector((state) => state.categoria.all)
    const callCategoria = React.useCallback(() => {
        dispatch(getCategories())
    }, [dispatch])

    React.useEffect(() => {
       callCategoria()
    }, [callCategoria])

    console.log('Categorias: ' + JSON.stringify(categorias));

    return (
        <>
            <IntroHome />
            <_Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#98AD84" fill-opacity="1" d="M0,160L1440,256L1440,320L0,320Z"></path></_Wave>

            <_GreenBg className="container-fluid">
                <div className="subtitulo container">
                    <div className="line"></div>
                    <h3>Nossas categorias</h3>
                    <div className="line"></div>
                </div>
                <_Categorias className="container">
                    <div className="row">
                        {categorias && categorias.map((categoria, i) => (
                            <CardCategory key={i} nome={categoria.nome} img={categoria.imagem} />
                        ))}
                    </div>
                </_Categorias>
            </_GreenBg>
        </>
    )
}

export default Home


const _Wave = styled.svg`
    margin-top: -100px;
`

const _GreenBg = styled.div`
    background-color: ${(props) => props.theme.colors.secondary};
    padding-bottom: 3.5rem;

    .subtitulo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5rem;
    }

    h3 {
        margin: 0 16px;
        line-height: 0;
        font-weight: bold;
        font-size: 2rem;
    }

    .line {
        display: block;
        width: 30%;
        height: 1px;
        background-color: ${(props) => props.theme.colors.offblack};
    }
`


const _Categorias = styled.section`
    
`

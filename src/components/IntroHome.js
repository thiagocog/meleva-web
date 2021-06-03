import React from 'react'
import styled from 'styled-components'

const IntroHome = () => {
    return (
        <BoxIntro className='container text-center'>
            <TitleStyle>Me leva</TitleStyle>
            <SubTitleStyle>E deixa o mundo mais leve</SubTitleStyle>
            <Banner />
        </BoxIntro>
    )
}

export default IntroHome



const BoxIntro = styled.section`
    margin-top: 4rem;
`

const TitleStyle = styled.h1`
    font-size: 7rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary};
`

const SubTitleStyle = styled.p`
    font-family: 'Comfortaa', cursive;
    font-size: 2.6rem;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.gray};
`

const Banner = styled.div`
    margin-top: 6rem;
    height: 60vh;
    border-radius: 8px;
    background-image: url('/images/bannerhome.jpg');
    background-position: center;
    background-size: cover; 
`
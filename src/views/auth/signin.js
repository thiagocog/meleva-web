import React from 'react'
import styled from 'styled-components'
import CardSignIn from '../../components/CardSignIn'


const signin = () => {
    return (
        <Body className="container-fluid p-5">
            <div className="container d-flex justify-content-center">
                <CardSignIn />
            </div>
        </Body>
        
    )
}

export default signin

const Body = styled.div`
    height: 100vh;
    background-color: ${(props) => props.theme.colors.secondary};

    .container {
        margin-top: 80px;
    }
`
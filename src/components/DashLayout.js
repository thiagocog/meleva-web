import React from 'react'
import styled from 'styled-components'
import DashControl from './DashControl'


const DashLayout = ({ children }) => {
    return (
        <BoxDash>
            <DashControl />
            <main>{children}</main>          
        </BoxDash>
    )
}

export default DashLayout

const BoxDash = styled.div`
    display: flex;
    flex-direction: column;
`
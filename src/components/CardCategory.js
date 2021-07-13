import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Card, CardImg, CardBody,
  CardTitle, Button
} from 'reactstrap';
import styled from 'styled-components';



const CardCategory = ({ img, nome, ...props }) => {

  return (
    <div className='col-md-3 mb-4'>
      <_Card className='text-center'>
        <_CardImg top width="100%" src={process.env.REACT_APP_API + img} alt="Card image cap" />
        <_CardBody>
          <CardTitle tag="h5">{nome}</CardTitle>
          <Button className='button'>Ver mais</Button>
        </_CardBody>
      </_Card>
    </div>

  )
}

export default CardCategory

const _Card = styled(Card)`
  padding: 0;
  border: none !important;
  background-color: ${(props) => props.theme.colors.offwhite};
  box-shadow: 1px 1px 10px ${(props) => props.theme.colors.offblack};

  h5 {
    margin: 1.5rem 0;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1.2rem;
  }
`

const _CardImg = styled(CardImg)`
  width: 100%;
  height: 12rem;
  padding: 0;
  /* border-bottom: 2px solid ${(props) => props.theme.colors.gray}; */
`

const _CardBody = styled(CardBody)`
  padding: 0;

  .button {
    width: 100%;
    border-radius: 0;
    background-color: ${(props) => props.theme.colors.primary};
    padding: .8rem 0;
  }
`
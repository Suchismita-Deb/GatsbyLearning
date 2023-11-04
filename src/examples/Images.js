import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import picture from '../assets/images/picture.jpg'

const Images = () => {
  return (
    <Wrapper>
        <img src={picture} alt='Image'></img>
        <h3>Gatsby Images.</h3>
    </Wrapper>
  )
}
const Wrapper = styled.section`
img{
    width:200px;
}
`


export default Images
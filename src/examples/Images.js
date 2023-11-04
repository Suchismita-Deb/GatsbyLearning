import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import picture from '../assets/images/picture.jpg'
import {StaticImage} from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
        {/* <img src={picture} alt='Image'></img> */}
        <StaticImage src='../assets/images/picture.jpg' alt='Image'/>        
    </Wrapper>
  )
}
const Wrapper = styled.section`
img{
    width:300px;
}
`


export default Images
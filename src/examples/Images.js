import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import picture from '../assets/images/picture.jpg'
import {StaticImage} from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
        {/* <img src={picture} alt='Image'></img>
        <StaticImage src='../assets/images/picture.jpg' alt='Image'/> */}
        <article>
            <h5>Contrained/Default</h5>
            <StaticImage 
                src='../assets/images/recipe-1.jpeg' 
                alt='Image' 
                height={400} 
                placeholder='tracedSVG' 
                layout='constrained'
                className="example-img"
                as="section"
            />
        </article>
    </Wrapper>
  )
}
const Wrapper = styled.section`
width:70vw;
margin: 0 auto;
article{
    border:2px solid red;
}
.example-img{
    border-radius:1rem;
}
`


export default Images
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
            <h5>Contrained</h5>
            <StaticImage 
                src='../assets/images/recipe-1.jpeg' 
                alt='Image' 
                placeholder='tracedSVG' 
                layout='constrained'
                className="example-img"
                as="section"
            />
            {/* The image will tae the size of the container in small screen and in big screen the image will be of its own size. */}
        </article>
        <article>
            <h5>Fixed</h5>
            <StaticImage 
                src='../assets/images/recipe-1.jpeg' 
                alt='Image' 
                placeholder='blurred' 
                layout='fixed'
                width={200}
                className="example-img"
                as="div"
            />
            {/* Fixed has the height and width fixed. */}
        </article>
        <article>
            <h5>Full width</h5>
            <StaticImage 
                src='../assets/images/recipe-1.jpeg' 
                alt='Image' 
                placeholder='dominantColor' 
                layout='fullWidth'
                className="example-img"
                as="article"
            />
            {/* Full Width will get the container size. Cannot pass height for the full width.*/}
        </article>
    </Wrapper>
  )
}
const Wrapper = styled.section`
width:70vw;
margin: 0 auto;
display:grid;
text-align:center;
gap:2rem;
article{
    border:2px solid red;
}
.example-img{
    border-radius:1rem;
    height:300px;
}
// Adding media query.
@media(min-width:992px){
    grid-template-columns:1fr 1fr 1fr;
    .example-img{
        height:200px;
    }
}
`


export default Images
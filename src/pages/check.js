import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'

const check = () => {
  return (
    <Layout>      
      <Wrapper>
        <h1>check</h1>
        
        <Link to="/">Home</Link>

        <p className='text'>This is to check. Lorem23gf Lorem23gf Lorem23gf Lorem23gf</p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  
color:green;

h1{
  color: blueviolet;
}

.text{
  text-transform: capitalize;
}
`

export default check
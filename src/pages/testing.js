import React from 'react'

import { graphql } from 'gatsby'

const Testing = ({data}) => {
    const author = data.site.info.author
  return (
    <div>Author : {author}</div>
  )
}

export const data = graphql`
{
  site {
    info : siteMetadata {
      title
      description
      author
      person {
        name
        age
      }
      simpleData
      complexData {
        name
        age
      }
    }
  }
}
`
export default Testing
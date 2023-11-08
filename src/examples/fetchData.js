import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'


const getData = graphql`
query FirstQuery{
    site {
      siteMetadata {
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

const FetchData = () => {
    // const data = useStaticQuery(getData)
    // console.log(useStaticQuery(getData))
    const {site:{siteMetadata:{title}}} = useStaticQuery(getData) // This is destructuring and we are getting the data inside the object.

  return (
    <div>
        {/* <h3>Name : {data.site.siteMetadata.person.name}</h3> */}
        <h3> Site title is : {title}</h3>
    </div>
  )
}

export default FetchData
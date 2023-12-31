import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
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
  `)
  return <div>
    <h2>{data.site.siteMetadata.person.name}</h2>
    <div>
      {data.site.siteMetadata.complexData.map((item,index)=>{
        return <p key={index}>{item.name}:{item.age}</p>
      })}
    </div>
  </div>
}

export default ComponentName

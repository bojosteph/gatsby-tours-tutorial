import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        description
        sitetitle: title
        author
        data {
          name
          age
        }
      }
    }
  }
`
const Header = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData)
  console.log(info)
  const title = info.sitetitle
  return (
    <div>
      {/* <h1>author{data.site.siteMetadata.author}</h1> */}
      <h1>author: {info.author} </h1>
      <h1>title: {title}</h1>
    </div>
  )
}

export default Header

import React from "react"
import Layout from "../components/layout"
import Tours from "../components/Tours/Tours"
import { graphql } from "gatsby"

const tours = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Tours tours={data.tours.edges} />
    </Layout>
  )
}

export const getTours = graphql`
  query {
    tours: allContentfulBlog {
      edges {
        node {
          title
          created
          slug
          featured
          contentful_id
          body {
            body
          }
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default tours

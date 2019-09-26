import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import img from "../images/tropical1.jpeg"
import Img from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "sky1.jpeg" }) {
      childImageSharp {
        fixed(width: 250, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "mountain1.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={img} className="basic" />
      </article>
      <article>
        <h3>fixed image/blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>fluid image/svg</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />
        <div className="small">
          <Img fluid={data.fluid.childImageSharp.fluid} />
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  article {
    border: 3px solid red;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  .small {
    width: 200px;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
  .fluid {
    width: 200px;
  }
`

export default Images

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../css/template.module.css"
import Image from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import { Link } from "gatsby"

const TourTemplate = ({ data }) => {
  const {
    title,
    created,
    body: { json },
    images,
  } = data.tour
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div className="rich">
            <h3>this is awesome image</h3>
            <img width="400" src={node.data.target.fields.file["en-US"].url} />
            <p>images provided by john doe</p>
          </div>
        )
      },
      "embedded-entry-block": node => {
        const { title, image, body } = node.data.target.fields
        console.log(body)

        return (
          <div>
            <br />
            <br />
            <br />
            <br />
            <h1>this is other post : {title["en-US"]}</h1>
            <img
              width="400"
              src={image["en-US"].fields.file["en-US"].url}
              alt=""
            />
            {documentToReactComponents(body["en-US"])}
            <br />
            <br />
            <br />
            <br />
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {images.map((item, index) => {
              return (
                <Image
                  key={index}
                  fluid={item.fluid}
                  alt={title}
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{title}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon}></FaMoneyBillWave>
              starting from
            </p>
            <p>
              <FaMap className={styles.icon} />
            </p>
          </div>
          <h4>start on: {created}</h4>

          <p className={styles.desc}>
            {documentToReactComponents(json, options)}
          </p>
          <h2>daily schedule</h2>

          <Link to="/tours">back to tours</Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    tour: contentfulBlog(slug: { eq: $slug }) {
      title
      created(formatString: "dddd MMMM do, YYYY")
      featured
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      body {
        json
      }
    }
  }
`
export default TourTemplate

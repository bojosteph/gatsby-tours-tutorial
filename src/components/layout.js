import React, { Fragment } from "react"
import Navbar from "./Navbar"
import "./layout.css"
// import "../sass/layout.scss"

const layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
    </Fragment>
  )
}

export default layout

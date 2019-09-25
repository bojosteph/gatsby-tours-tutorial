import React, { Fragment } from "react"
import Navbar from "./Navbar"

const layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
    </Fragment>
  )
}

export default layout

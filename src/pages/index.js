import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import {page,text} from "../examples/home.module.css"
import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
  <Layout>
    <div className={page}>
      <ExampleButton>Click Me</ExampleButton>
      <h1>Home Page</h1>
      <h1>Hello World</h1>
      <h1>Hello People</h1>
      <p className={text}>
        Lorem23gf,gbmflmlf dfee Lorem23gf,gbmflmlf dfee Lorem23gf,gbmflmlf dfee Lorem23gf,gbmflmlf dfee Lorem23gf,gbmflmlf dfee Lorem23gf,gbmflmlf dfee Lorem23gf,gbmflmlf dfee.
      </p>
    </div>
  </Layout>
  )
}

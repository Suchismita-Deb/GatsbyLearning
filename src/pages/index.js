import * as React from "react"
import Layout from "../components/Layout"
// import Images from "../examples/Images"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
  <Layout>
    <main className="page">
      <header className="hero">
        <StaticImage src="../assets/images/main.jpeg" alt="images" className="hero-img" placeholder="tracedSVG" layout="fullWidth"/>
        {/* Adding props */}
        <div className="hero-container">
          <div className="hero-text">
            <h1>Blog</h1>
            <h3>Lets learn together.</h3>
          </div>
        </div>
      </header>
    </main>
  </Layout>
  )
}

import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
// Link to the contact page.
const About = () => {
  return (
    <Layout>      
      <main className='page'>
        <section className='about-page'>
          {/* There is two section one for the text and one for the static image. */}
          <article>
            <h2>Letterpress tousled kale chips lo-fi master cleanse tote bag.</h2>
            <p>
              Craft beer edison bulb gentrify, chia vexillologist next level normcore poutine. </p>
            <p>
              Polaroid forage gentrify wolf marfa tbh raclette lomo chambray. Tonx viral kinfolk roof party.
            </p>
            <Link to='/contact' className='btn'>
              contact
            </Link>
          </article>
          <StaticImage src="../assets/images/about.jpeg" alt="Image" className='about-img' placeholder='blurred'/>
        </section>
      </main>
    </Layout>
  )
}


export default About
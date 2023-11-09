import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>      
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>
            <h3>Want to connect?</h3>
            <p>
              Five dollar toast man braid kogi put a bird on it portland poke, locavore fit pinterest austin beard lyft air plant meditation viral. 
            </p>
            <p>
              Raw denim roof party Brooklyn dreamcatcher blackbird spyplane, next level pabst taxidermy tote bag gochujang literally skateboard neutral milk hotel whatever. 
            </p>
            <p>
            Bicycle rights letterpress JOMO, vinyl green juice street art affogato big mood. Slow-carb truffaut helvetica, whatever chicharrones microdosing before they sold out etsy viral deep v.
            </p>
          </article>
          <article>
            <form action='' className='form contact-form'>
              <div className='form-row'>
                <label htmlFor='name'>Your name</label>
                <input type='text' name='name' id='name'/>
              </div>
              <div className='form-row'>
                <label htmlFor='email'>Your email</label>
                <input type='text' name='email' id='email'/>
              </div>
              <div className='form-row'>
                <label htmlFor='message'>Your message</label>
                <textarea name='message' id='message'></textarea>
              </div>
              <button type='submit' className='btn block'>Submit</button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}


export default Contact
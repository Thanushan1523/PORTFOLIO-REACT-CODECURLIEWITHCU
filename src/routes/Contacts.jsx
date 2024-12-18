import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

import Form from '../components/Form'
const Contacts = () => {
  return (
    <div>
     <NavBar/>
     <Hero heading="about me"   text="0777 888 888 88 "/>
     <Form/>

     <Footer/>
   
            </div>
  )
}

export default Contacts;
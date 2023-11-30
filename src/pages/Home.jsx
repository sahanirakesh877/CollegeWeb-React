import React from 'react'
import Services from './Services'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'

const Home = () => {
  return (
    <>
    <div class="home  ">
  <div class="content container mx-auto">
      <h5>Welcome To Our XYZ College</h5>
      <h1>Courses <span class="changecontent"></span></h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, nisi.</p>
      <a href="#book">Get Admission</a>
  </div>
</div>
<Services/>
<About/>
<Blog/>
<Contact/>
      
    </>
  )
}

export default Home

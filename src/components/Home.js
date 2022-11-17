import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Digital from './Digital'
import Whychoose from './Whychoose'
import Onlinebanking from './Onlinebanking'
import Blogs from './Blogs'
import Footer from './Footer'
import './Home.css'

export default function Home() {
  return (
    <div>
    
        <Navbar></Navbar>
        <Header></Header>
        <Digital></Digital>
        <Whychoose></Whychoose>
        <Onlinebanking></Onlinebanking>
        <Blogs></Blogs>
        <Footer></Footer>

    </div>
  )
}

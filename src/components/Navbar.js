import React from 'react'
import './navbar.css'
import Sb from './sabka bank.png'
import {Link} from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='container'>
        <img src={Sb} className='container-img'></img>
        <ul className='navitems'>
            <li className='navitemsli'><a>SERVICES</a></li>
            <li className='navitemsli'><a>ABOUT US</a></li>
            
            
        </ul>
        <Link to='/getstarted'><button className='btn'>Get Started</button></Link>
        <Link to='/admin'><button className='btn1'>Admin Portal</button></Link>
    </div>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'
import Data from './Data'
import './display.css'
import { Link } from 'react-router-dom'
import Sb from './sabka bank.png'

export default function Display() {
    let history=useNavigate();
    history('/');
  return (
    
    <div >
    <div className='container'>
        <img src={Sb} className='container-img'></img>
        <ul className='navitems'>
            <li className='navitemsli'><a>SERVICES</a></li>
            <li className='navitemsli'><a>ABOUT US</a></li>
        </ul>
        <Link to='/getstarted'><button className='btn'>Get Started</button></Link>
        <Link to='/admin'><button className='btn1'>Admin Portal</button></Link>
    </div>
    <div className='heads'>
    <h1>CUSTOMER'S REQUESTS</h1>
    </div>
    <div >
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE NO.</th>
            <th>SERVICE</th>
          </tr>

        </thead>
        <tbody>
          {
            Data && Data.map((item)=>{
              return(
                <tr >
                  <td>{item.a}</td>
                  <td>{item.b}</td>
                  <td>{item.c}</td>
                  <td>{item.d}</td>

                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
      </div>

    </div>
    
  )
}

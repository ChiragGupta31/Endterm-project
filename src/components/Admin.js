import React, { useState } from 'react'
import Sb from './sabka bank.png'
import { Link,useNavigate } from 'react-router-dom'

import './admin.css'

export default function Admin() {

  const [username,setuname]=useState('');
  const[password,setPassword]=useState('');
  let history=useNavigate();

  const handleSubmitt=(e)=>{
    e.preventDefault();
    let u=username,p=password;

    if(u=='admin' && p=='admin'){
      history('/display');
    }

    else{
      setuname('');
      setPassword('');
      alert('Inavlid Username and Password');
    }

  }

  return (
    <div>
    <div className='container'>
    <img src={Sb} className='container-img'></img>
    <ul className='navitems'>
        <li className='navitemsli'><a>SERVICES</a></li>
        <li className='navitemsli'><a>ABOUT US</a></li>
    </ul>
    <Link to='/getstarted'><button className='btn'>Get Started</button></Link>
    <Link to='/admin'><button className='btn1'>Admin Portal</button></Link>

    </div>
    <div className='forms'>
      <h1>WELCOME TO SABKA BANK'S</h1>
      <h3>ADMIN PORTAL</h3>
    </div>

  
    <div className='forms2'>
      <label>USERNAME</label><br></br>
      <input type='text' placeholder='Enter your name' onChange={(e)=>setuname(e.target.value)}></input><br></br>
      <label>PASSWORD</label><br></br>
      <input type='password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}></input><br></br>
      <button className='btnn3' onClick={handleSubmitt}>DISPLAY REQUESTS</button>
    </div>
    </div>
    

  )
}

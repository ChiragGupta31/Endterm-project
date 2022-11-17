import React,{useState} from 'react'
import Sb from './sabka bank.png'
import './getstarted.css'
import Data from './Data';
import { Link } from 'react-router-dom';


export default function Getstarted() {
  const [name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const[service,setService]=useState('');


  const handleSubmit=(e)=>{
    e.preventDefault();
    let a=name,b=email,c=phone,d=service;
    Data.push({a,b,c,d});
    // console.log(Data);

  
    alert('Your Request has been submitted');
    setName('');
    setEmail('');
    setPhone('');
    
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

    <div className='heading'>
      <h1>WELCOME TO SABKA BANK'S</h1>
      <h3>CUSTOMER PORTAL</h3>

    </div>

    <div className='formss'>
      <label>NAME</label><br></br>
      <input type='text' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} required></input><br></br>
      <label>EMAIL ID</label><br></br>
      <input type='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required></input><br></br>
      <label>Phone No.</label><br></br>
      <input type='phone' placeholder='Enter your phone no.' onChange={(e) => setPhone(e.target.value)} required></input><br></br>
      <label for='services'>Service</label><br></br>
      <select onChange={(e) => setService(e.target.value)} required>
        <option value='Loans'>Loans</option>
        <option value='Insurance'>Insurance</option>
        <option value='Savings acc'>Savings account</option>
      </select>
      <button className='btnn2' onClick={handleSubmit}>SUBMIT</button>

    </div>

    </div>
  )
}

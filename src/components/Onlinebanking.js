import React from 'react'
import './online.css'
import cash from './cash.png'

export default function Onlinebanking() {
  return (
    <div className='container-online'>

        <h1>NOW ENJOY A BANK LIKE<br></br> EXPEREINCE WITH EASY <br></br>VIDEO BANKING</h1>
        <button className='btnn'>CONTACT US</button>
        <img src={cash}></img>
    </div>
  )
}

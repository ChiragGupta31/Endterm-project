import React from 'react'
import './digital.css'
import savings from './savings.jpg'
import loan from './loan.jpg'
import credit from './creditcard.jpg'


export default function Digital() {
  return (
    <div>
    <h1>Personal & Digital Bankings</h1>
    <div className='div-container'>
        <div className='div-card'>
          <img src={loan}></img>
          <h2>Loan Payments</h2>
          <p>Pay your loan EMI or other loans with just a click.</p>
          <button>Pay now</button>
        </div>
        <div className='div-card'>
          <img src={savings}></img>
          <h2>Savings Account</h2>
          <p>Earn upto 7% p.a. with easy monthly interest payouts.</p>
          <button>Open Account</button>
        </div>
        <div className='div-card'>
          <img src={credit}></img>
          <h2>Elite Credit Card</h2>
          <p>Now the power to choose is in your hands now.</p>
          <button>Apply now</button>
        </div>

    </div>
    
    </div>
  )
}
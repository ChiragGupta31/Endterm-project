import React from 'react'
import savingsacc from './savingsacc.jpg'
import rate from './rate.jpg'
import rbi from './rbi.jpg'
import './Blogs.css'

export default function Blogs() {
  return (
    <div>
    <h1>BLOGS</h1>
    <div className='container-blogs'>
    
        <div className='subdivs'>
            <h2>RELEVANT</h2>
            <img src={savingsacc}></img>
            <p>7 Things to consider before Opening a Savings Account.</p>
        </div>
        <div className='subdivs'>
            <h2>MUST READ</h2>
            <img src={rate}></img>
            <p>How does a Bank Calculate Interest on your Fixed Deposits.</p>
        </div>
        <div className='subdivs'>
            <h2>RECENT</h2>
            <img src={rbi}></img>
            <p>RBI announces New Credit Card & Debit Card rules w.e.f 1st October. </p>
        </div>
    
    </div>
    </div>
  )
}

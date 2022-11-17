import React from 'react'
import years from './5years.PNG'
import iso from './iso.PNG'
import extensive from './extensive.PNG'
import './whychoose.css'

export default function Whychoose() {
  return (
    <div className='container-why'>
        <h1>WHY CHOOSE SABKA BANK</h1>
        <div className='images'>
        <div><img src={years}></img>
          <h2>5 years of Banking</h2>
          <p>25 years of binding trust</p>
        </div>
        <div><img src={iso}></img>
        <h2>ISO 27001 CERTIFIED</h2>
          <p>State-of-the-art Secured Digital Ecosystem</p>
          </div>   
        <div><img src={extensive}></img>
        <h2>EXTENSIVE NETWORK</h2>
          <p>950+ Banking Touchpoints</p>
        </div>
        </div>
    </div>
  )
  }

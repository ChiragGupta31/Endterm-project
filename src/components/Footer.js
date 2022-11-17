import React from 'react'
import './footer.css'


export default function Footer() {
  return (
    <div className='container-footer'>
        <p>Important Links: Press Release | Notice Board | Bank Auction | Branch Locator | Terms and Conditions</p>
        <hr></hr>
        <div className='subdivss'>
        <div>
        <h3><u>Personal Banking</u></h3>
        <ul>
            <li>Savings Account</li>
            <li>Fixed Deposits</li>
            <li>Current Accounts</li>
        </ul>
        </div>
        <div>
            <h3><u>Loans</u></h3>
            <ul>
                <li>Car Loan</li>
                <li>Home Loan</li>
                <li>Gold Loan</li>
            </ul>
        </div>
        <div>
            <h3><u>Insurance</u></h3>
            <ul>
                <li>Life Insurance</li>
                <li>Health Insurance</li>
                <li>Vehicle Insurance</li>
            </ul>
        </div>
        <div>
            <h3><u>Investment</u></h3>
            <ul>
                <li>Mutual Funds</li>
                <li>Pension System</li>
                <li>Stock Market</li>
            </ul>
        </div>
        <div>
            <h3><u>Other Links</u></h3>
            <ul>
                <li>About Us</li>
                <li>Gallery</li>
                <li>Schemes</li>
            </ul>
        </div>
        </div>
        <div className='icons'>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
        </div>
        <div className='copy'>
        <h3 >Contact Us @ +11-2024567</h3>
        <h3 >Email Us @ sabkabank31@gmail.com</h3>
        <h3 >COPYRIGHT 2022||ALL RIGHTS RESERVED</h3>
        </div>
        
        
    </div>
  )
}

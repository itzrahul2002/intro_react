import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <>
      <div className="foot">
        <div className="container">
           <div className="row">
             <div className="col-md-3">
                 <ul>
                    <li>ONLINE SHOPPING</li>
                    <a href="#"><li>Men</li></a>
                    <a href="#"><li>Women</li></a>
                    <a href="#"><li>Kids</li></a>
                    <a href="#"><li>Home & Living</li></a>
                    <a href="#"><li>Beauty</li></a>
                    <a href="#"><li>Gift Cards</li></a>
                    <a href="#"><li>Myntra Insider</li></a>
                </ul>
             </div>

             <div className="col-md-3">
                 <ul>
                    <li>CUSTOMER POLICIES</li>
                    <a href="#"><li>Contact Us</li></a>
                    <a href="#"><li>FAQ</li></a>
                    <a href="#"><li>T&C</li></a>
                    <a href="#"><li>Terms Use</li></a>
                    <a href="#"><li>Track Oders</li></a>
                    <a href="#"><li>Shipping</li></a>
                    <a href="#"><li>Cancellation</li></a>
                    <a href="#"><li>Returns</li></a>
                    <a href="#"><li>Privacy Policy</li></a>
                    <a href="#"><li>Grievenace Officer</li></a>
                 </ul>
             </div>

             <div className="col-md-3">
                 <ul>
                    <li>USEFUL LINKS</li>
                    <a href="#"><li>Blogs</li></a>
                    <a href="#"><li>Careers</li></a>
                    <a href="#"><li>Sites Map</li></a>
                    <a href="#"><li>Corporate Information</li></a>
                    <a href="#"><li>Whitehat</li></a>
                    <a href="#"><li>Location</li></a>
                 </ul>
             </div>

             <div className="col-md-3">
              <label>EXPERIENCEE MYANTRA APP ON MOBLIE</label>
                <a href="#" target="_blank" className="market-btn google-btn" role="button">
                  <span className="market-button-subtitle">Download on the</span>
                  <span className="market-button-title">Google Play</span>
                </a>

                <a href="#" target="_blank" className="market-btn apple-btn" role="button">
                {/* <a><i className="fa-brands fa-apple"></i> */}
                  <span className="market-button-subtitle">Download on the</span>
                  <span className="market-button-title">App Store</span>
                 </a>
             </div>
           </div>
         </div>
      </div>
        <div className="footer">
              <div className="footer_text">
                  <p>CopyRight &copy; 2023 by Rahul Thakur | All Right  Resversed</p>
              </div>
              <div className="footer_icons">
                  <a href="#"><i className='bx bx-up-arrow-alt'></i></a>
              </div>
          </div>
      </>
    )
  }
}

import React, { Component } from 'react'
import "./dashboard.css";
import Mycard from '../mycard/Mycard';
import Men from '../men/Men';
import Contact from '../contact/Contact';

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <div className='head'>
          Welcome To Our Sites
        </div>

        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner slider">
              <div className="carousel-item active">
                <img src="../gallery/cb1.webp" className="d-block w-100" alt="banner1"/>
              </div>
              <div className="carousel-item">
                <img src="../gallery/cb2.webp" className="d-block w-100" alt="banner2"/>
              </div>
              <div className="carousel-item">
                <img src="../gallery/cb3.jpg" className="d-block w-100" alt="banner3"/>
              </div>
              <div className="carousel-item">
                <img src="../gallery/cb2.webp" className="d-block w-100" alt="banner5"/>
              </div>
              <div className="carousel-item">
                <img src="../gallery/cb3.jpg" className="d-block w-100" alt="banner6"/>
              </div>
              <div className="carousel-item">
                <img src="../gallery/cb2.webp" className="d-block w-100" alt="banner4"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <label className="head1">DEAL OF THE DAY</label>
         <div className="mycontainer pro">
            <Mycard title="Shoes" Price="2200" brand="Tommy Hilfiger" my_img="gallery/nikejordan.jpeg"/>
            <Mycard title="Shirt" Price="2999" brand="Nike" my_img="gallery/shirt.webp"/>
            <Mycard title="Jacket" Price="8900" brand="Addidas" my_img="gallery/shirt.webp"/>
            <Mycard title="Shirt" Price="2999" brand="Nike" my_img="gallery/nikejordan.jpeg"/>
            <Mycard title="Shirt" Price="2999" brand="Nike" my_img="gallery/shirt.webp"/> 
            <Mycard title="Shirt" Price="2999" brand="Nike" my_img="gallery/shirt.webp"/> 
            <Mycard title="Shirt" Price="2999" brand="Nike" my_img="gallery/shirt.webp"/> 
         </div>
      </>
    )
  }
}

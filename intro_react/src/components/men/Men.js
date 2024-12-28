import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Men extends Component {
  constructor(props)
  {
    super(props);
    // console.log("constucter");
    this.state=[
      {
          title:"pant",
          price:"499",
          brand:"NIKE",
          my_img:"img/nikejordan.jpeg",
      },
      {
        title:"Shirt",
        price:"499",
        my_img:"img/nikejordan.jpeg",
      },
      {
        title:"Shirt",
        price:"499",
        my_img:"img/nikejordan.jpeg",
      },
      {
        title:"Shirt",
        price:"499",
        my_img:"img/nikejordan.jpeg",
      },
      {
        title:"Shirt",
        price:"499",
        my_img:"img/nikejordan.jpeg",
      },
      {
        title:"Shirt",
        price:"499",
        my_img:"img/nikejordan.jpeg",
      }
    ]
  }
  render() {
    return (
      <>
        <div className="container shirt">
          <div className="row">
          {
            this.state.map((item,index)=>
            <div className="col-12 col-sm-8 col-md-6 col-lg-4" key={index}>
              <div className="card">
                <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png" alt="Vans"/>
                <div className="card-img-overlay d-flex justify-content-end">
                  <Link to="#" className="card-link text-danger like">
                    <i className="fas fa-heart"></i>
                  </Link>
                </div>
                  <div className="card-body">
                    <h4 className="card-title">{item.title}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{item.brand}</h6>
                    <p className="card-text">
                      The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements whilst still looking cool. </p>
                    {/* <div className="options d-flex flex-fill">
                      <select className="custom-select mr-1">
                          <option selected>Color</option>
                          <option value="1">Green</option>
                          <option value="2">Blue</option>
                          <option value="3">Red</option>
                      </select>
                      <select className="custom-select ml-1">
                          <option selected>Size</option>
                          <option value="1">41</option>
                          <option value="2">42</option>
                          <option value="3">43</option>
                      </select>
                    </div> */}
                    <div className="buy d-flex justify-content-between align-items-center">
                      <div className="price text-success"><h5 className="mt-4"> R.S {item.price}</h5></div>
                      <Link to="#" className="btn btn-danger mt-3"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
                    </div>
                  </div>
                </div>
              </div>
            )
            }
            </div>
         </div>
      </>
    )
  }
}

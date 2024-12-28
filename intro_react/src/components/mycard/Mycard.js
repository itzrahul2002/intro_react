import React, { Component } from 'react'

export default class Mycard extends Component {
    constructor(props)   // props Method
    {
        super(props);
        console.log(props);
    }
  render() {
    const {title,price,brand,my_img}=this.props;  //object destructing method
    return (
        <>
            {/* <div style={{textAlign:"center"}}>
                <div>Mycard</div>
                <div>{"This my title "+this.props.title}</div>
                <div>{`Price $`}</div>
                <div>{`Brand ${this.props.brand}`}</div>
                <div>{`color ${this.props.color}`}</div>
                <br />
                <br />
                <div>{"This is my title "+title}</div>
                <div>{`Price is ${price}`}</div>
                <div>{`Brand is${brand}`}</div>
                <div>{`Color ${color}`}</div>

            </div> */}
        
            <div className="card deal">
                <img src={my_img} alt="product image"/>
                <h5 className="card-title">{title}</h5>
                <h5 className="card-title">{this.props.price}</h5>
                <p className="card-text">Grab your best Discount Today Up to 50% off</p>
                {/* <a href="#" className="btn btn-primary">Add To Cart</a> */}
            </div>           
        </>
    )
  }
}

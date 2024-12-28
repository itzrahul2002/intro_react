import React, { Component } from 'react'

export default class Women extends Component {
  constructor (props)
  {
     super(props)
     this.state =
     {
        brand:"rahul"
     }
  }
  change= () =>
  {
      // alert("hello")
      this.setState({brand:"Rahul Thakur"})
  }
  render() {
    return (
      <>
        { this.state.brand}
        <br/>
        <input type="submit" value="change name" onClick={this.change}/>
      </>
    )
  }
}

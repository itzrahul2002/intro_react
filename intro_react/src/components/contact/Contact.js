import axios from 'axios';
import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props)
  {
      super(props);
      this.state=
      {
          f_name:"",
          l_name:"",
          email_id:"",
          phone:"",
          subject:"",
          desc:"",
          msg:""
      } 
  }

  firstName=(event)=>
  {
      // console.log(event);
      // console.log(event.target);
      // console.log(event.target.value);

      this.setState({f_name:event.target.value})
  }
  lastName=(r)=>
  {
      this.setState({l_name:r.target.value})
  }
  emialId=(a)=>
  {
      this.setState({email_id:a.target.value})
  }
  mobNum=(h)=>
  {
      this.setState({phone:h.target.value})
  }
  subjectSet=(u)=>
  {
      this.setState({subject:u.target.value})
  }
  textDesc=(l)=>
  {
      this.setState({desc:l.target.value})
  }
  saveData=(e)=>
  {
      e.preventDefault();
      console.log(this.state);
      axios.post("http://localhost:4005/contacts",this.state)
      .then((res)=>{
        // console.log(res);
        this.setState({msg:"Request Send Sucessfully !"});
      })
      .then((err)=>{console.log(err);})
  }
  render() {
    return (
      <>
        <h3 className='locat'>Our Location</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d875.0075978483901!2d77.14163052916341!3d28.68873747537144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQxJzE5LjUiTiA3N8KwMDgnMzEuOCJF!5e0!3m2!1sen!2sin!4v1680838058228!5m2!1sen!2sin" style={{width:"100%", height:"350px", border:"0", marginTop:"5%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="contact-parent">
              <div className="contact-child child1">
                <p>
                    <i className="fas fa-map-marker-alt"></i> Address <br />
                    <span> Kohat Enclave,Near Metro Station
                    <br />
                    New Delhi-110034
                    </span>
                </p>
                <p>
                    <i className="fas fa-phone-alt"></i> Let's Talk <br />
                    <span> 9560994962</span>
                </p>
                <p>
                    <i className=" far fa-envelope"></i> General Support <br />
                    <span>rahulthakur@example.com</span>
                </p>
              </div>
              {/* <h2 className='chead'>Contact Us</h2> */}
              <div className="container contact-child child2">
              {/* {this.state.msg} */}
              {this.state.msg?
                <div className='alert alert-success  send_msg'>{this.state.msg}</div>
              :' '}
              <form action="" onSubmit={this.saveData}>
                <div className="row inside-contact">
                      <h2 className='chead'>Contact Us</h2>
                      <div className="col-md-6">
                        <input type="text" name="f_name" id="" onChange={this.firstName} placeholder='First Name'/>
                      </div>
                      <div className="col-md-6">
                        <input type="text" name="l_name" id="" onChange={this.lastName} placeholder='Last Name' />
                      </div>
                </div>
                <div className="row inside-contact">
                      <div className="col-md-6">
                        <input type="email" name="email_id" id="" onChange={this.emialId} placeholder='Email Id'/>
                      </div>
                      <div className="col-md-6">
                        <input type="mobile" name="phone" id="" onChange={this.mobNum} placeholder='Phone Number' />
                      </div>
                </div>
                <div className="row inside-contact">
                      <div className="col-md-12">
                        <input type="text" name="subject" id="" onChange={this.subjectSet} placeholder='Subject'/>
                      </div>
                </div>
                <div className="row inside-contact">
                      <div className="col-md-12">
                        <textarea name="desc" id="" cols="10" onChange={this.textDesc} rows="4" placeholder='Message'></textarea>
                      </div>
                </div>
                <div className="row inside-contact">
                      <div className="col-md-12">
                      <input type="submit" id="btn_send" value="SEND"/>
                      </div>
                </div>
                </form>
              </div>
          </div>
        </div>
      </>
    )
  }
}

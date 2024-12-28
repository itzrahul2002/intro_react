import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Livecontactlist extends Component {
    constructor(props)
    {
        super(props);
        this.state={cdata:[]}
    }
    componentDidMount()
    {
        axios.get("http://localhost:4004/contacts")
        .then((response)=>{
            // console.log(response);
            // console.log(response.data);
            this.setState({cdata:response.data})
        })
        // console.log(this.state.cdata)
    }
    deleteRecord=(id)=>
    {
        console.log(id);
        axios.delete("http://localhost:4005/contacts"+id)
        .then((res)=>{console.log(res);})
    }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <table class="table">
                <thead>
                  <tr>
                      <th scope="col">ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email ID</th>
                      <th scope="col">Phone No</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Description</th>
                      <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                      this.state.cdata.map((item,index)=>
                        
                          <tr>
                              <th scope="row">{item.id}</th>
                              <td>{item.f_name}</td>
                              <td>{item.l_name}</td>
                              <td>{item.email_id}</td>
                              <td>{item.phone}</td>
                              <td>{item.subject}</td>
                              <td>{item.desc}</td>
                              <td>{item.msg}</td> 
                              <td>
                                <Link to={'/edit-user/${item.id}'} className='btn btn-success'>Update</Link>&nbsp;
                                <input type="submit" value="Delete" className='btn btn-danger' onClick={(e)=>{this.deleteRecord(item.id)}}/>
                              </td>
                          </tr>
                       
                      )
                  }
              </tbody>
              </table>

               
            </div>
          </div>
        </div> 
      </>
    )
  }
}

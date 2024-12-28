import React, { Component } from 'react'

export default class Contactlist extends Component {
    constructor(props)
    {
        super(props);
        this.state={mydata:[]};
    }
    componentDidMount()
    {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then
      (
          data => this.setState({mydata:data})
      )  
      
    }
    // showdata=()=>
    // {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then
    //     (
    //         data => this.setState({mydata:data})
    //     )
    // }
  render() {
    return (
      <>
        <div>Contactlist</div>
        <input type="submit" value="Featch Data" onClick={this.showdata}/>
        <br/>
        {/* <ul>
          {
              this.state.mydata.map((item,index)=>
              <li>{item.id+" "+item.title+" "+item.body}</li>
              )
          }
        </ul> */}

        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
              <div className="col-md-8">
                  <table border="1" width="100%">
                    <thead>
                      <tr style={{color:"red"}}>
                        <th>ID</th>
                        <th>Tittle</th>
                        <th>Body</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                          this.state.mydata.map((data,index)=>
                              <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                              </tr>
                            )
                        }
                     </tbody>
                  </table>
              </div>
              <div className="col-md-2"></div>
          </div>
        </div>
      </>
    )
  }
}

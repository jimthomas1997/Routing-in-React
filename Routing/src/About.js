import React, { Component } from 'react';
import {Table} from 'react-bootstrap';


class About extends Component {
  
  constructor(props){
    super(props);
    this.state={deps:[]}
  }

  componentDidMount(){
    this.refreshList();
  }

  refreshList(){
    this.setState({
      deps:[{"DepartmentID":1,"DepartmentName":"IT"},
      {"DepartmentID":2,"DepartmentName":"IT"}]
    })
  }
  

  render(){
    const {deps}=this.state;
  return (
    <div className="About">
    <Table striped bordered hover variant="dark" size="sm"> 
      <thead>
        <tr>
          <th>DepartmentID</th>
          <th>DepartmentName</th>
        </tr>
      </thead>
      <tbody>
        {deps.map(dep=>
          <tr key={dep.DepartmentID} > 
        <td>{dep.DepartmentID}</td>
        <td>{dep.DepartmentName}</td> 
        </tr>     
        )}
      </tbody>
    </Table>
    
      
    </div>
  )}
}

export default About;
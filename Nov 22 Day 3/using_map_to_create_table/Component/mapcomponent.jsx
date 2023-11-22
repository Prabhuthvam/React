import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class mapcomponent extends Component {
    state = {  } 
    render() { 
        return (<table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Prabhuthvam</td>
            <td>Chakali</td>
            <td>Shadnagar</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ram</td>
            <td>Seetha</td>
            <td>Bharath</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Suriya</td>
            <td>Hero</td>
            <td>Chennai</td>
          </tr>
        </tbody>
      </table>);
    }
}
 
export default mapcomponent;
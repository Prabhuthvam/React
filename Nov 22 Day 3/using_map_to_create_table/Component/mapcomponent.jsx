import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class MapComponent extends Component {
  state = {
    users: [
      {
        id: 1,
        firstName: 'Prabhuthvam',
        lastName: 'Chakali',
        address: 'Shadnagar',
      },
      {
        id: 2,
        firstName: 'Ram',
        lastName: 'Seetha',
        address: 'Bharath',
      },
      {
        id: 3,
        firstName: 'Suriya',
        lastName: 'Hero',
        address: 'Chennai',
      },
    ],
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MapComponent;

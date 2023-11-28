import React, { Component } from 'react';
import axios from 'axios';

export class Bloodmatch1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      filterlist: [],
      name: "",
      age: "",
      address: "",
      location: "",
      bloodgroup: "",
      setbool: false,
    };
  }

  submit = (e) => {
    this.setState({
      setbool: true,
    });
    axios
      .get('http://localhost:3001/details')
      .then((res) => {
        this.setState({ list: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
  };

  render() {
    console.log(this.state.filterlist);
    const { location, bloodgroup } = this.state;
    const filteredData = this.state.list.filter(
      (x) => this.state.location === x.location && this.state.bloodgroup === x.bloodgroup
    );

    return (
      <div>
        <form className='blood-match'>
          <label>Location</label>
          <select
            value={location}
            onChange={(e) => this.setState({ location: e.target.value })}
            required>
            <option>select location</option>
            <option>Kurnool</option>
            <option>Nandyal</option>
            <option>Vijayawada</option>
            <option>Hyderabad</option>
          </select>
          <label>Blood Group</label>
          <select
            value={bloodgroup}
            onChange={(e) => this.setState({ bloodgroup: e.target.value })}
            required
          >
            <option>select bloodgroup</option>
            <option>A+</option>
            <option>B+</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>A-</option>
            <option>B-</option>
            <option>AB-</option>
          </select>
          <button onClick={(e) => this.submit(e)}>Submit</button>
        </form>
        {this.state.setbool ? (
          <>
            <table className='emp-table'>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Blood Group</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((x) => (
                  <tr key={x.id}>
                    <td>{x.location}</td>
                    <td>{x.bloodgroup}</td>
                    <td>{x.phonenumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Bloodmatch1;

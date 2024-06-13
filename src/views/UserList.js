import React, { Component } from "react";
import "../component/profile/Profile";
import DataUser from "../controllers/UserControllers";
import DataOwner from "../controllers/OwnerControllers";

class UserList extends Component {
  render() {
    return (
      <div className="card">
        <div className="container">
          
          <div className="conten">
            <h2>Data Pengguna</h2>
            <div className="content"> Kelapa Sawit</div>
            <DataOwner/>
            <hr/>
            <DataUser />
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;

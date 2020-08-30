import React, { Component } from "react";
import style from "../Styles/Components/Profile.module.scss";
export class Profile extends Component {
    render() {
      return (
        <div className={`col mt-5 mx-0`}>
            <div className="text-center">
                USERNAME
            </div>
            <div className="text-center">
                TIPO DE CUENTA
            </div>
        </div>
      );
    }
  }
  
  export default Profile;
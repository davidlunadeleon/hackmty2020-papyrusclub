import React, { Component } from "react";
import styles from "../Styles/Pages/Home.module.css";
import Navbar from "../Components/Navbar";
import {Link} from "react-router-dom";
export class Home extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <br />

        <div>
          <section className={styles.tiles}>
          <Link to={`/chat?name=user&room=Technology`}>
            <img
              src={require("../Images/The Simulation Hypothesis.jpg")}
              alt=""
              className={styles.tile}
            />
          </Link>
          <Link to={`/chat?name=user&room=Health`}>
            <img
              src={require("../Images/Why We Sleep.jpg")}
              alt=""
              className={styles.tile}
            />
          </Link>
          <Link to={`/chat?name=user&room=Programming`}>
            <img
              src={require("../Images/Automate The Boring Stuff With Python.jpg")}
              alt=""
              className={styles.tile}
            />
          </Link>
          <Link to={`/chat?name=user&room=Coding`}>
            <img
              src={require("../Images/Clean Code.jpg")}
              alt=""
              className={styles.tile}
            />
          </Link>
          <Link to={`/chat?name=user&room=Literature`}>
            <img
              src={require("../Images/Moby Dick.jpg")}
              alt=""
              className={styles.tile}
            />
          </Link>
          <Link to={`/chat?name=user&room=Biography`}>
            <img
              src={require("../Images/Elon Musk.jpg")}
              alt=""
              className={styles.tile}
            />
          </Link>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;

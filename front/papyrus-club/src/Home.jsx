import React, { Component } from "react";
import styles from "./Home.module.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Papyrus Club</h1>

        <div>

          <section className={styles.tiles}>
            <img
              src={require("./Images/The Simulation Hypothesis.jpg")}
              alt=""
              className={styles.tile}
            />

            <img
              src={require("./Images/Why We Sleep.jpg")}
              alt=""
              className={styles.tile}
            />

            <img
              src={require("./Images/Automate The Boring Stuff With Python.jpg")}
              alt=""
              className={styles.tile}
            />
            <img
              src={require("./Images/Clean Code.jpg")}
              alt=""
              className={styles.tile}
            />

            <img
              src={require("./Images/Moby Dick.jpg")}
              alt=""
              className={styles.tile}
            />

            <img
              src={require("./Images/Elon Musk.jpg")}
              alt=""
              className={styles.tile}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default Home;

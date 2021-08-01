import React, { Component } from "react";
import welcomeCss from "./Welcome.module.css";

export default class Welcome extends Component {
  render() {
    return <h2 className={welcomeCss.dome}>Welcome!</h2>;
  }
}

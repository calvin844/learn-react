import React, { Component } from "react";
import helloCss from './Hello.module.css'

export default class Hello extends Component {
  render() {
    return <h1 className={helloCss.title}>Hello,React!</h1>;
  }
}

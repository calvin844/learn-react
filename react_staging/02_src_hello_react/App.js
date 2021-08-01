// 创建外壳组件App
// react使用了多种暴露的方式，默认暴露了react，又使用分别暴露的方式暴露了Component，因此可以以下方式引入
import React, { Component } from "react";
import Hello from "./Components/Hello/Hello.jsx";
import Welcome from "./Components/Welcome/Welcome.jsx";

// 创建并暴露APP组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { mouse: false }; //标识鼠标移入、移出
  // 鼠标移入移出的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  // 勾选或取消勾选todo的回调
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };
  // 删除todo的回调
  handleDel = (id) => {
    // console.log('通知删除',id)
    if (window.confirm("确定删除？")) {
      this.props.delTodo(id);
    }
  };
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={() => this.handleDel(id)}
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}

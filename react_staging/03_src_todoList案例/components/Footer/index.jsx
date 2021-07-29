import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  // 全选checkbox的回调
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };
  //   清除已完成的回调
  handleClearAllDone = () => {
    if (window.confirm("确定清除？")) {
      this.props.clearAllDone();
    }
  };
  render() {
    const { todos } = this.props;
    // // 已完成的个数
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    // 总数
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === total && total !== 0}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成 {doneCount}</span> / 全部 {total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}

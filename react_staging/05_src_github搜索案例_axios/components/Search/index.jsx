import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    // 获取用户输入
    // 解构赋值连续赋值写法
    // let obj2 = {a:{b:2}}
    // const {a:{b}} = obj2
    // console.log(b) //连续解构赋值获取b，但是无法获取a，打印结果为2
    // const {a:{b:data}} = obj2
    // console.log(data) //连续解构赋值获取b并改名为data，但是无法获取a，打印结果为2
    const {
      keywordElement: { value: keyWord },
    } = this;
    // 发送请求前通知APP更新状态
    this.props.updateAppState({ isFirst: false, isLoading: true });
    // 发送网络请求
    axios.get(`/api1/search/users2?q=${keyWord}`).then(
      (response) => {
        // 请求成功后通知APP更新状态
        this.props.updateAppState({
          users: response.data.items,
          isLoading: false,
        });
      },
      (error) => {
        // 请求失败后通知APP更新状态
        this.props.updateAppState({
          err: error.message,
          isLoading: false,
        });
      }
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索 Github 用户</h3>
        <div>
          <input
            ref={(c) => (this.keywordElement = c)}
            type="text"
            placeholder="输入关键字搜索"
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}

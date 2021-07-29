import React, { Component } from "react";
import PubSub from "pubsub-js";
// import axios from "axios";

export default class Search extends Component {
  search = async () => {
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
    // 发送请求前通知List更新状态
    PubSub.publish("updateList", { isFirst: false, isLoading: true });
    // 发送网络请求---使用axios发送
    // axios.get(`/api1/search/users?q=${keyWord}`).then(
    //   (response) => {
    //     // 请求成功后通知List更新状态
    //     PubSub.publish("updateList", {
    //       users: response.data.items,
    //       isLoading: false,
    //     });
    //   },
    //   (error) => {
    //     // 请求失败后通知List更新状态
    //     PubSub.publish("updateList", {
    //       err: error.message,
    //       isLoading: false,
    //     });
    //   }
    // );

    // 发送网络请求---使用fetch发送（未优化）
    // fetch(`/api1/search/users2?q=${keyWord}`)
    //   .then(
    //     (response) => {
    //       console.log("联系服务器成功了！");
    //       return response.json();
    //     },
    //     (error) => {
    //       console.log("联系服务器失败了！", error);
    //       return new Promise(() => {});
    //     }
    //   )
    //   .then(
    //     (response) => {
    //       console.log("获取成功", response);
    //     },
    //     (error) => {
    //       console.log("获取失败", error);
    //     }
    //   );

    // 发送网络请求---使用fetch发送（优化）
    // fetch(`/api1/search/users2?q=${keyWord}`)
    //   .then((response) => {
    //     console.log("联系服务器成功了！");
    //     return response.json();
    //   })
    //   .then((response) => {
    //     console.log("获取成功", response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // await优化，await只能等待返回成功结果
    try {
      const response = await fetch(`/api1/search/users2?q=${keyWord}`);
      const data = await response.json();
      PubSub.publish("updateList", {
        users: data.items,
        isLoading: false,
      });
    } catch (error) {
      PubSub.publish("updateList", {
        err: error.message,
        isLoading: false,
      });
    }
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

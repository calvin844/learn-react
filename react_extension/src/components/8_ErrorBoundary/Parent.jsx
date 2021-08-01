import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state = {
        hasError: '' //用于标识子组件是否产生错误
    }
    // 当parent的子组件出现报错时，会触发getDerivedStateFromError调用，并携带错误信息
    static getDerivedStateFromError(error) {
        console.log(error)
        return { hasError: error }
    }

    componentDidCatch() {
        //统计错误次数，反馈给服务器，用于通知编码人员进行BUG的解决
        console.log('渲染组件错')
    }

    render() {
        return (
            <div>
                <h2>我是Parent</h2>
                {this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <Child />}

            </div>
        )
    }
}

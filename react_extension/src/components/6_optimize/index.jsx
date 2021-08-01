import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
    state = { carName: '奔驰C36' }

    changeCar = () => {
        this.setState({ carName: "玛莎" })
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log(this.props, this.state) //目前的props和state
    //     // console.log(nextProps, nextState) //接下来要变化的目标props，目标state
    //     return !(this.state.carName === nextState.carName)
    // }

    render() {
        console.log('parent---render')
        const { carName } = this.state
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <span>车名是：{carName}</span>
                <br />
                <button onClick={this.changeCar}>换车</button>
                <Child carName="奥拓" />
            </div>
        )
    }
}


class Child extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(this.props, this.state) //目前的props和state
    //     console.log(nextProps, nextState) //接下来要变化的目标props，目标state
    //     return !(this.props.carName === nextProps.carName)
    // }
    render() {
        console.log('Child---render')
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                <span>我接到的车：{this.props.carName}</span>
            </div>
        )
    }
}


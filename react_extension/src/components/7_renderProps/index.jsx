import React, { Component } from 'react'
import './index.css'
import C from '../1_setState'

export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <A render={(name) => <C name={name} />} renderA={(name) => <B name={name} />} />
            </div>
        )
    }
}


class A extends Component {
    state = { name: 'tom' }
    render() {
        console.log(this.props.children)
        const { name } = this.state
        return (
            <div className="a">
                <h3>我是A组件</h3>
                {this.props.render(name)}
                {this.props.renderA(name)}
                {/* <B /> */}
            </div>
        )
    }
}



class B extends Component {
    render() {
        return (
            <div className="b">
                <h3>我是B组件,{this.props.name}</h3>
            </div>
        )
    }
}

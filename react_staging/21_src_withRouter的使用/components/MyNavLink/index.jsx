import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        // 标签体内容通过props.children传递，同时，也可以通过设置标签的children属性设置自己的标签体内容
        // const { children } = this.props
        // <NavLink activeClassName="hover" className="list-group-item" children={children} />
        return (
            <NavLink activeClassName="hover" className="list-group-item" {...this.props} />
        )
    }
}

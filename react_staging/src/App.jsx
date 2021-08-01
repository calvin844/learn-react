import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里
    // 初始化状态
    state = {
        todos: [
            { id: "01", name: '吃饭', done: true },
            { id: "02", name: '睡觉', done: false },
            { id: "03", name: '打代码', done: false },
            { id: "04", name: '逛街', done: false },
        ]
    }
    // addTodo用于添加一个todo，接收的参数是todo对象
    addTodo = (todoObj) => {
        // 获取原todos
        const { todos } = this.state
        // 追加一个todo
        const newTodos = [todoObj, ...todos]
        // 更新状态
        this.setState({
            todos: newTodos
        })
    }
    // updateTodo用于更新一个todo对象
    updateTodo = (id, done) => {
        // 获取状态中的todos
        const { todos } = this.state
        // 匹配处理数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done }
            else return todoObj

        })
        // 更新状态
        this.setState({ todos: newTodos })
    }
    // delTodo用于删除一个todo对象
    delTodo = (id) => {
        // 获取状态中的todos
        const { todos } = this.state
        // 删除指定id的todo对象
        const newTodos = todos.filter((todoObbj) => {
            return todoObbj.id !== id
        })
        // 更新状态
        this.setState({ todos: newTodos })
    }
    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} delTodo={this.delTodo} />
                    <Footer />
                </div>
            </div>
        )
    }
}
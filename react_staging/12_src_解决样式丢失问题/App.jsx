import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生html中，靠a标签跳转不同的页面 */}
                            {/* <a className="list-group-item" href="./about.html">About</a> */}
                            {/* <a className="list-group-item active" href="./home.html">Home</a> */}

                            {/* 在react中靠路由链接实现切换组件---编写路由链接 */}
                            {/* 默认高亮样式名active，如果刚好也是用active作为高亮，就可以不写activeClassName */}
                            <MyNavLink to="/aiguigu/home">Home</MyNavLink>
                            <MyNavLink to="/aiguigu/about">About</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Switch>
                                    <Route path="/aiguigu/home" component={Home} />
                                    <Route path="/aiguigu/about" component={About} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

/*
    此文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore } from 'redux'
// 引入为Count组件服务的reducer
import countRenducer from './count_reducer'

// const store = createStore(countRenducer)

// 暴露store
export default createStore(countRenducer)
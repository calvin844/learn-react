/*
    此文件专门为Count组件生产action对象
*/

import { INCREMENT, DECREMENT } from './constant'

export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

import { ADD_PERSON } from '../constant'

// 初始化人的列表
const initState = [{ id: '001', name: 'tom', age: '18' }]


export default function personReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON: //若是添加一个人
        // 这里不能使用unshift等修改原数组的方法，Reducer必须是纯函数
            return [data, ...preState]
        default:
            return preState
    }
}
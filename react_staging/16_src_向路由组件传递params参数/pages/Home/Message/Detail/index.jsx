import React, { Component } from 'react'

const detailData = [
    { id: '01', content: '你好，中国' },
    { id: '02', content: '你好，中国2' },
    { id: '03', content: '你好，中国3' }
]
export default class Detail extends Component {
    render() {
        // 接受params参数
        const { id, title } = this.props.match.params
        const findResult = detailData.find(detailObj => {
            return detailObj.id === id
        })
        return (
            <ul>
                <li>id：{id}</li>
                <li>title：{title}</li>
                <li>content：{findResult.content}</li>
            </ul>
        )
    }
}

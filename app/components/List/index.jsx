import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import ListItem from './item/index'
import './style.less'
class List extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        const data = this.props.data
        return (
            <div className="list-container">
                {this.props.children}
                {/*{
                    data.map((item, index) => {
                        return (
                            <ListItem key={index} data={item}></ListItem>
                        )
                    })
                }*/}
            </div>
        )
    }
}
export default List
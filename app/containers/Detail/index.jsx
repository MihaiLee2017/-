import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import Header from '../../components/Header/index'
import Info from './subpage/Info'
import Comment from './subpage/Comment'
import Buy from './subpage/Buy'
class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        const id = this.props.match.params.id
        console.log("id:", id)
        // const id = 'aa'
        return (
            <div>
                <Header history={this.props.history} title="商户详情"></Header>
                <Info id={id}></Info>
                <Buy id={id}></Buy>
                <Comment id={id}></Comment>
            </div>
        )
    }
    componentDidMount() {
        console.log("detail did mounte")
    }
}
// export default Detail
export default Detail
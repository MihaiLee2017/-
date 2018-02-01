import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from '../../components/Header/'
import OrderList from './subpage/OrderList'
class User extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
                <Header history={this.props.history} title="用户中心"></Header>
                <OrderList userinfo={this.props.userinfo}></OrderList>
            </div>
        )
    }
    componentDidMount() {
        this.checkLogin()
    }
    checkLogin() {
        if (!this.props.userinfo.username) {
            this.props.history.replace('/login')
        }
    }
}
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}
export default connect(
    mapStateToProps
)(User)
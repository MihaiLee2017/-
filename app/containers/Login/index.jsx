import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import Header from '../../components/Header/index'
import LoginComponent from '../../components/LoginComponent'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            checking: true,
        }
    }
    render() {
        return (
            <div>
                <Header history={this.props.history} title="登陆"></Header>
                {
                    this.state.checking ?
                        <div></div>
                        :
                        <LoginComponent loginHandle={this.loginHandle.bind(this)}></LoginComponent>
                }
            </div>
        )
    }
    componentDidMount() {
        this.doCheck()
    }
    doCheck() {
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            this.goUserPage()
        } else {
            this.setState({
                checking: false
            })
        }
    }
    loginHandle(username) {
        const userinfo = this.props.userinfo
        const userinfoAction = this.props.userinfoAction
        userinfo.username = username
        userinfoAction.update(userinfo)
        const params = this.props.match.params
        const router = params.router
        if (router) {
            this.props.history.replace(decodeURIComponent(router))
        } else {
            this.goUserPage()
        }

    }
    goUserPage() {
        // this.props.history.replace(`/search/${category}/${encodeURIComponent(value)}`)
        this.props.history.replace('/user')
    }
}
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userinfoAction: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login))
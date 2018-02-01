import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import BuyAndStore from '../../../components/BuyAndStore'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as storeActionsFromFile from '../../../actions/store'

import './style.less'
class Buy extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            isStore: false
        }
    }
    render() {
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore} storeHandle={this.storeHandle.bind(this)}></BuyAndStore>
            </div>
        )
    }
    componentDidMount() {
        this.checkStoreState()
    }
    checkStoreState() {
        const id = this.props.id
        const store = this.props.store
        store.some((item) => {
            if (item.id === id) {
                this.setState({
                    isStore: true,
                })
                return true
            }
        })
    }
    loginCheck() {
        const userinfo = this.props.userinfo
        const id = this.props.id
        // console.log("userinfo", userinfo)
        if (!userinfo.username) {
            const url = encodeURIComponent(`/detail/${id}`)
            this.props.history.replace(`/login/${url}`)
            return false
        }
        return true
    }
    storeHandle() {
        const isLogin = this.loginCheck()
        if (!isLogin) {
            return
        }
        const storeActions = this.props.storeActions
        const id = this.props.id
        const item = {
            id
        }
        if (this.state.isStore) {
            storeActions.rm(item)
        } else {
            storeActions.add(item)
        }
        this.setState({
            isStore: !this.state.isStore
        })
    }
}
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Buy)
)
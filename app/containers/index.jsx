import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'



class App extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            // initDone: true
        }
    }
    render() {
        console.log("this.props.children:", this.props.children)
        return (
            <div className='App'>
                {
                    this.props.children
                }
                {/*{this.props.children}*/}
            </div>
        )
    }
    componentDidMount() {
        // 从localstorerage获取城市
        let cityName = LocalStore.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '北京'
        }
        // 城市信息存储到redux中
        this.props.userInfoAction.update({
            cityName: cityName,
        })
    }
}
function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        // userInfoAction: (data) => dispatch(userInfoActionsFromOtherFile(data))
        userInfoAction: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App))
// export default App
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import HomeHeader from '../../components/HomeHeader/index'
import Category from '../../components/Category/index'
import Ad from '../Home/subpage/Ad'
import List from '../Home/subpage/List'

import { getBucket, putBucket } from '../../util/AliOssUtils'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
                <button onClick={putBucket}>putBucket</button>
                <button onClick={getBucket}>getBucket</button>
                <HomeHeader cityName={this.props.userinfo.cityName} history={this.props.history}></HomeHeader>
                <Category></Category>
                <div style={{ height: '15px' }}></div>
                <Ad></Ad>
                <List cityName={this.props.userinfo.cityName}></List>
                {/*{this.props.userinfo.cityName}
                {this.props.userinfo2.cityName}*/}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        // userinfo2: state.userinfo2
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home))
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from '../../components/Header/index'
import CurrentCity from '../../components/CurrentCity/index'
import CityList from '../../components/CityList/index'

import { Route, Switch, Link } from 'react-router-dom'
import Login from '../Login'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
// import * as actionTypes from '../../constants/userinfo'
import localStore from '../../util/localStore'
import { CITYNAME } from '../../config/localStoreKey'

class City extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
                <Header title="选择城市" history={this.props.history}></Header>
                <CurrentCity cityName={this.props.userinfo.cityName}></CurrentCity>
                <CityList changeFn={this.changeCity.bind(this)}></CityList>
                {/*<Link to={`${this.props.match.url}/login}`}>to</Link>*/}
                {/*{this.props.children}*/}
            </div>
        )
    }
    changeCity(newCity) {
        if (newCity == null) {
            return
        }
        const userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this.props.userInfoAction.update(userinfo)

        localStore.setItem(CITYNAME, newCity)

        this.props.history.replace('/')
    }
    // componentDidMount() {
    //     console.log(this.props.history)
    // }
}
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoAction: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(City))
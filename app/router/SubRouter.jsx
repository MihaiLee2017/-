import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../containers/Home/index'
import User from '../containers/User/index'
import City from '../containers/City/index'
import Login from '../containers/Login/index'
import Search from '../containers/Search/index'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound/index'

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import style from '../containers/style.less'

// import { routerHistory } from 'router'

class SubRouter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.location)
        const key = this.props.location.pathname
        const location = this.props.location
        const { action } = this.props.history
        const transName = action === 'POP' ? "back" : action === "PUSH" ? "go" : ""
        const transTime = action === 'POP' ? 400 : action === "PUSH" ? 400 : 10
        return (
            <ReactCSSTransitionGroup
                transitionName={transName}
                transitionEnterTimeout={transTime}
                transitionLeaveTimeout={transTime}>
                <div key={key} style={{ position: "absolute", width: "100%" }}>
                    <Switch location={location}>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/city' component={City}></Route>
                        <Route path='/login/:router?' component={Login}></Route>
                        <Route path='/user' component={User}></Route>
                        <Route path='/search/:category/:keyword?' component={Search}></Route>
                        <Route path='/detail/:id' component={Detail}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </div >
            </ReactCSSTransitionGroup >
        )
    }
}
export default SubRouter
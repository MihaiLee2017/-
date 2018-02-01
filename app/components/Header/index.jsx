import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
    clickHandle() {
        // const backRouter = this.props.backRouter
        // if (backRouter) {
        //     this.props.history.replace(backRouter)
        // } else {
        //     window.history.back()
        // }
        // window.history.back()
        this.props.history.goBack()
    }
}
export default Header
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import './style.less'

import SearchInput from '../SearchInput/index'

class SearchHeader extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                     <SearchInput value={this.props.value || ''} enterHandle={this.enterHandle.bind(this)}></SearchInput>
                </div>
            </div>
        )
    }
    clickHandle() {
        // window.history.back()
        this.props.history.goBack()
    }
    enterHandle(value) {
        const category = this.props.category || ''
        this.props.history.replace(`/search/${category}/${encodeURIComponent(value)}`)
    }
}
export default withRouter(SearchHeader)
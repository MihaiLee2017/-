import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router-dom'
import SearchInput from '../SearchInput/index'
import './styles.less'
class HomeHeader extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            // <div>home header</div>
            <div id="home-header" className='clear-fix'>
                <div className='home-header-left float-left'>
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className='icon-angle-down'></i>
                    </Link>
                </div>
                <div className='home-header-right float-right'>
                    <Link to="/login"><i className="icon-user"></i></Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className='icon-search'></i>
                        <SearchInput value='' enterHandle={this.enterHandle.bind(this)}></SearchInput>
                        {/*<input type='text' placeholder="请输入关键字" value={this.state.value} onChange={this.changeFn.bind(this)} onKeyUp={this.keyPressFn.bind(this)} />*/}
                    </div>
                </div>
            </div>
        )
    }

    enterHandle(value) {
        this.props.history.push(`/search/all/${encodeURIComponent(value)}`)
    }
}
export default HomeHeader
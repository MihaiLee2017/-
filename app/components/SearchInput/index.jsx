import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <input type='text' className="search-input"
                value={this.state.value}
                onChange={this.changeHandle.bind(this)}
                onKeyUp={this.keyUpHanndle.bind(this)}
                placeholder="请输入关键字" />
        )
    }
    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        })
    }
    changeHandle(e) {
        this.setState({
            value: e.target.value
        })
    }
    keyUpHanndle(e) {
        if (e.keyCode !== 13) {
            return
        }
        this.props.enterHandle(e.target.value)
    }
}
export default SearchInput
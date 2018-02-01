import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SearchHeader from '../../components/SearchHeader/index'
import SearchList from './subpage/List'
class Search extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
                <SearchHeader history={this.props.history} category={this.props.match.params.category} value={this.props.match.params.keyword}></SearchHeader>
                <SearchList cityName={this.props.userinfo.cityName} category={this.props.match.params.category} keyword={this.props.match.params.keyword}></SearchList>
            </div>
        )
    }
    componentDidMount() {
        console.log('search did mount')
        // console.log(this.props.match.params)
    }
}
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Search))
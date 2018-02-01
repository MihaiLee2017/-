import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getSearchData } from '../../../fetch/search/search'

import ListComponent from '../../../components/List/index'
import ListItem from '../../../components/List/item/index'
import LoadMore from '../../../components/LoadMore/index'
class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            page: 0,
            hasMore: false,
            isLoadingMore: false,
            data: []
        }
    }
    render() {
        const data = this.state.data
        return (
            <div>
                {
                    this.state.data.length ?
                        <ListComponent data={data} >
                            {
                                data.map((item, index) => {
                                    return (
                                        <ListItem key={index} data={item}></ListItem>
                                    )
                                })
                            }
                        </ListComponent> :
                        <div>loading...</div>
                }
                {
                    this.state.hasMore ?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMorePageData.bind(this)}></LoadMore> :
                        ""

                }
            </div>
        )
    }
    componentDidMount() {
        this.loadMorePageData()
    }
    componentDidUpdate(prevProps, prevState) {
        const category = this.props.category
        const keyword = this.props.keyword
        console.log('componentDidUpdate', this.props)
        if (category === prevProps.category && keyword === prevProps.keyword) {
            return
        }
        this.setState({
            page: 0,
            hasMore: false,
            isLoadingMore: false,
            data: []
        })
        this.loadMorePageData()
    }
    loadMorePageData() {
        const page = this.state.page
        const city = this.props.cityName
        const category = this.props.category
        const keyword = this.props.keyword
        this.setState({
            isLoadingMore: true,
        })
        const result = getSearchData(page, city, category, keyword)
        setTimeout(() => {
            this.resultHandle(result)
        }, 1000)
    }
    resultHandle(result) {
        result.then((res) => {
            return res.json()
        }).then((res) => {
            const isLoadingMore = false
            const data = this.state.data.concat(res.data)
            const hasMore = res.hasMore
            const page = this.state.page + 1
            this.setState({
                isLoadingMore,
                data,
                page,
                hasMore,
            })
        })
    }
}
export default SearchList
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home'
import ListCompoent from '../../../components/List'
import ListItem from '../../../components/List/item/index'
import LoadMore from '../../../components/LoadMore'
import './style.less'
class List extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0,
        }
    }
    render() {
        const data = this.state.data
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    data.length ?
                        <ListCompoent data={data}>
                            {
                                data.map((item, index) => {
                                    return (
                                        <ListItem key={index} data={item}></ListItem>
                                    )
                                })
                            }
                        </ListCompoent> :
                        <div>loading...</div>
                }
                {
                    this.state.hasMore ?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMorePageData.bind(this)}></LoadMore> :
                        ''

                }
            </div>
        )
    }
    componentDidMount() {
        // this.loadFirstPageData()
        this.loadMorePageData()
    }
    loadFirstPageData() {
        const city = this.props.cityName
        const currentPage = 0;
        this.setState({
            isLoadingMore: true
        })
        const result = getListData(city, currentPage)
        setTimeout(() => {
            this.resultHandle(result)
        }, 1000);
    }
    loadMorePageData() {
        const city = this.props.cityName
        const currentPage = this.state.page
        this.setState({
            isLoadingMore: true
        })
        const result = getListData(city, currentPage)
        setTimeout(() => {
            this.resultHandle(result)
        }, 1000);
    }
    resultHandle(result) {
        result.then((res) => {
            return res.json()
        }).then((res) => {
            const hasMore = res.hasMore
            const data = this.state.data.concat(res.data)
            const page = this.state.page + 1
            this.setState({
                hasMore,
                data,
                page,
                isLoadingMore: false,
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('首页”猜你喜欢“获取数据报错, ', ex.message)
                this.setState({
                    isLoadingMore: false,
                })
            }
        })
    }

}
export default List
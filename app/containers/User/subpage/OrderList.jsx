import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ListCompoent from '../../../components/List/index'
import OrderItem from '../../../components/List/orderItem/orderItem'
import LoadMore from '../../../components/LoadMore/index'
import { getOrderListData, postComment } from '../../../fetch/user/orderList'
import './style.less'
class OrderList extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            nextPage: 1,
            isLoadingMore: false,
            hasMore: true,
            data: []
        }
    }
    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length > 0 ?
                        <ListCompoent>
                            {
                                this.state.data.map((item, index) => {
                                    return (
                                        <OrderItem key={index} submitComment={this.submitComment.bind(this)} data={item}></OrderItem>
                                    )
                                })
                            }
                        </ListCompoent> : ''
                }
                {
                    this.state.hasMore ?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}></LoadMore> :
                        ''
                }
            </div>
        )
    }
    componentDidMount() {
        this.loadMoreData()
    }
    loadMoreData() {
        this.setState({
            isLoadingMore: true,
        })
        const username = this.props.userinfo.username
        const nextPage = this.state.nextPage
        const result = getOrderListData(username, nextPage)
        setTimeout(() => {
            this.resultHandle(result)
        }, 500);
    }
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const nextPage = this.state.nextPage + 1
            const isLoadingMore = false
            const hasMore = json.hasMore
            const data = this.state.data.concat(json.data)
            this.setState({
                nextPage,
                isLoadingMore,
                hasMore,
                data
            })
        })
    }

    submitComment(id, value, callback) {
        const result = postComment(id, value)
        // console.log("result", result)
        result.then(res => {
            return res.json()
        }).then(json => {
            if (json.errno === 0) {
                callback && callback()
            }
        })
    }
}
export default OrderList
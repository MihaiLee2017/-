import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData } from '../../../fetch/detail/detail'
import ListCompoent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
import CommentItem from '../../../components/List/commentItem/'
import './style.less'
class Comment extends React.Component {
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
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.data.length ?
                        <ListCompoent>
                            {
                                this.state.data.map((item, index) => {
                                    return (
                                        <CommentItem key={index} data={item}></CommentItem>
                                    )
                                })
                            }
                        </ListCompoent> : ''
                }
                {this.state.hasMore
                    ?
                    <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}></LoadMore>
                    :
                    ''
                }
            </div>
        )
    }
    componentDidMount() {
        this.loadMoreData()
    }
    loadMoreData() {
        if (this.state.isLoadingMore) {
            return
        }
        this.setState({
            isLoadingMore: true
        })
        const id = this.props.id
        const page = this.state.nextPage
        const result = getCommentData(page, id)
        setTimeout(() => {
            this.resultHandle(result);
        }, 1000);
    }
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const nextPage = this.state.nextPage + 1
            const data = this.state.data.concat(json.data)
            this.setState({
                nextPage,
                isLoadingMore: false,
                hasMore: json.hasMore,
                data,
            })
        })
    }
}
export default Comment
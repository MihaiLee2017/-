import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const isLoadingMore = this.props.isLoadingMore
        return (
            <div className="load-more" ref="wrapper">
                {
                    isLoadingMore
                        ? <span>加载中...</span>
                        : <span>加载更多</span>
                }
            </div>
        )
    }
    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn
        const isLoadingMore = this.props.isLoadingMore
        const wrapper = this.refs.wrapper
        let timeoutId
        window.addEventListener('scroll', () => {
            if (isLoadingMore) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(() => {
                const top = wrapper.getBoundingClientRect().top
                const windowHeight = window.screen.height
                if (top && top < windowHeight) {
                    loadMoreFn()
                }
            }, 50);
        })
    }

}
export default LoadMore
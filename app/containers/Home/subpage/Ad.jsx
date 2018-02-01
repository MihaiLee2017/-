import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getAdData } from '../../../fetch/home/home.js'
import HomeAd from '../../../components/HomdAd/index'
class Ad extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: []
        }
    }
    render() {
        const data = this.state.data
        return (
            <div>
                {/*{this.state.data.length}*/}
                {
                    data.length ?
                        <HomeAd data={data}></HomeAd> :
                        <div>loading...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        const result = getAdData();
        result.then((res) => {
            console.log(res)
            return res.json()
        }).then((json) => {
            const data = json
            if (data.length) {
                this.setState({
                    data
                })
            }
        })
    }
}
export default Ad
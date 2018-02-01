import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getInfoData } from '../../../fetch/detail/detail'
import DetailInfo from '../../../components/DetailInfo/index'

class Info extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            info: {}
        }
    }
    render() {
        return (
            <div>
                {/*inof:{this.state.info.title}*/}
                {
                    this.state.info ?
                        <DetailInfo data={this.state.info}></DetailInfo>
                        :
                        ''
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取商户info
        this.getInfo()

    }
    getInfo() {
        const id = this.props.id
        const result = getInfoData(id)
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                info: json
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('详情页，获取商户信息出错')
            }
        })
    }
}
export default Info
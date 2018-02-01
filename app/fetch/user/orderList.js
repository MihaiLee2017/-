import { get } from '../get'
import { post } from '../post'

export function getOrderListData(username, page) {
    const url = `/api/orderlist/${username}/${page}`
    return get(url)
}

export function postComment(id, comment) {
    const result = post('/api/submitComment', {
        id: id,
        comment: comment
    })
    return result
}
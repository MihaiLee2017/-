import { get } from '../get'
export function getInfoData(id) {
    const url = `/api/detail/info/${id}`
    // console.log(url)
    return get(url)
}

export function getCommentData(page, id) {
    const url = `/api/detail/comment/${page}/${id}`
    // console.log(url)
    return get(url)
}
import { get } from '../get'
export function getSearchData(page, city, category, keyword) {
    const keywordStr = keyword ? `/${keyword}` : ''
    // console.log(`/api/searclist/${page}/${city}/${category}${keywordStr}`)
    const result = get(`/api/searclist/${page}/${city}/${category}${keywordStr}`)
    return result
}
import { get } from './get'
import { post } from './post'
export function getData() {
    var result = get('/api/1')
    result.then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    })

    var result1 = get('/api/2')
    result1.then(res => {
        return res.json()
    }).then(res => {
        console.log(res)
    })
}
export function postData() {
    var result = post('/api/post', { a: '100', b: '200' })
    result.then(res => {
        return res.json()
    }).then(res => {
        console.log(res)
    })
}
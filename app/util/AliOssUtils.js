// import co from 'co'
// import OSS from 'ali-oss'
const co = require('co');
const OSS = require('ali-oss');


const kAliOssRegion = 'oss-cn-shenzhen'
const kAliOssAccessKeyId = '6BwjNAhQq7Tg6OGH'
const kAliOssAccessKeySecret = 'xq5F8EtxWGgcN1aiwsNuFs6VVVhC49'
const kAliOssBucket = 'z-store'
export const kAliOssUrlPrefix = 'http://z-store.oss-cn-shenzhen.aliyuncs.com/'

const client = new OSS.Wrapper({
    region: kAliOssRegion,
    accessKeyId: kAliOssAccessKeyId,
    accessKeySecret: kAliOssAccessKeySecret,
    bucket: kAliOssBucket
})
export function getBucket() {
    co(function* () {
        const result = yield client.list();
        console.log("getBucket:", result);
    }).catch(function (err) {
        console.log("getBucket err:", err);
    });
}
// 创建 buckets

export function putBucket() {
    co(function* () {
        const result = yield client.putBucket('test-bucket')
        console.log("putBucket:", result);
    }).catch(function (err) {
        console.log("putBucket err:", err);
    });
}
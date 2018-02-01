var co = require('co');
var OSS = require('ali-oss');

var kAliOssRegion = 'oss-cn-shenzhen'
var kAliOssAccessKeyId = '6BwjNAhQq7Tg6OGH'
var kAliOssAccessKeySecret = 'xq5F8EtxWGgcN1aiwsNuFs6VVVhC49'
var kAliOssBucket = 'z-store'
var client = new OSS({
    region: kAliOssRegion,
    accessKeyId: kAliOssAccessKeyId,
    accessKeySecret: kAliOssAccessKeySecret,
    // bucket: kAliOssBucket
})
function getBuckets() {
    co(function* () {
        var result = yield client.listBuckets();
        console.log(result);
        // var result = yield client.listBuckets({
        //     prefix: 'prefix'
        // });
        // console.log(result);
    }).catch(function (err) {
        console.log(err);
    });
}
getBuckets()
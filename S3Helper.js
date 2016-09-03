/**
 * Created by alonsolarra on 8/30/16.
 */

var AWS = require("aws-sdk");
var s3 = new AWS.S3();

module.exports.saveInS3 = function(bucket, key, content, callback){
    var params = {
        Bucket:bucket,
        Key: key,
        Body: content,
        ACL: "public-read"
    };

    s3.upload(params, function(error, data){
        if(error){
            callback(error);
        }
        else{
            callback(null, data);
        }
    });
};

module.exports.readFromS3 = function(bucket, key, callback){
    var params = {
        Bucket:bucket,
        Key: key
    };

    s3.getObject(params, function(error, data){
        if(error){
            callback(error);
        }
        else{
            callback(null, data);
        }
    });
};

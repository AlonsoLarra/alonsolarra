/**
 * Created by alonsolarra on 8/27/16.
 */
var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';

var s3 = new AWS.S3();
s3.listBuckets(function(err, data) {
  if (err) { console.log("Error:", err); }
  else {
    for (var index in data.Buckets) {
      var bucket = data.Buckets[index];
      if(bucket.Name=='alonsolarra')
      console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
    }
  }
});

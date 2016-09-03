/**
 * Created by alonsolarra on 9/3/16.
 */
var Helper = require("./S3Helper");
var AWS = require("aws-sdk");
var s3 = new AWS.S3();
var fs = require('fs'),
  request = require('request');
var urlParams = {Bucket: 'alonsolarra', Key: 'sorry_ladies_i_m_in_the_night_s_watch_by_thafartfactory-d6lh6h2.jpg'};


s3.getSignedUrl('getObject', urlParams, function(err, url){
  var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  };

  Helper.readFromS3(urlParams.Bucket,urlParams.Key,function (error,data) {
    if(error){
      console.log(error);
    }
    else{
        if(data.Metadata.move){
          var params = {
            Bucket:'cc116-assignment3/18162',
            Key: 'image.jpg',
            Body: data.Body,
            ACL:'public-read'
          };
          s3.putObject(params, function(err, data){
            if (err)
            { console.log(err);
            } else {
              console.log('succesfully uploaded the image!');
            }
          });
//console.log(data.Body);

        }
    }
  });

  download(url, 'image.jpg', function(){
    console.log('done');
  });

});

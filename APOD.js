/**
 * Created by alonsolarra on 9/3/16.
 */

var fs = require('fs'),
  request = require('request');

request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var md = JSON.parse(body);
    console.log(md.title)
    var download = function(uri, filename, callback){
      request.head(uri, function(err, res, body){
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    download(md.url, 'APOD.jpg', function(){
      console.log('done');
    });
  }
});

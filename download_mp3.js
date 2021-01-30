var fs = require('fs'),
  request = require('request');

request
  .get('https://api-widget.soundcloud.com/media/soundcloud:tracks:870042880/141f2c48-b3d5-4c8b-85b6-d4f97c02af72/stream/hls?secret_token=s-VC2ZsFmsK3S')
  .on('error', function(err) {
    // handle error
  })
  .pipe(fs.createWriteStream('2.mp3'));

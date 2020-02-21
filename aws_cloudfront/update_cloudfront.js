var AWS = require('aws-sdk');

var cloudfront = new AWS.CloudFront();

var params = {
  Id: 'E2DDEBXIF85NRY'
};
cloudfront.getDistributionConfig(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
})


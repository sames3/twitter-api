var http = require("https");

var options = {
  "method": "GET",
  "hostname": "api.twitter.com",
  "port": null,
  "path": "/1.1/friends/list.json",
  "headers": {
    "cookie": "personalization_id=%22v1_%2BEJZdTMsTotUHael6Umf3w%3D%3D%22; guest_id=v1%253A158025960178083918; lang=en",
    "content-length": "0",
    "authorization": "OAuth oauth_callback=\"https%3A%2F%2Ftwitter.com%2Fhome\", oauth_consumer_key=\"DWxP6vs0VuIyGfAwI1HOEdWiD\", oauth_nonce=\"DpgdQSpdRxSp1TDVXpp3ee98ZsNEVX20\", oauth_signature=\"kqraWvURW4a2wUUcssefXR680Lo%3D\", oauth_signature_method=\"HMAC-SHA1\", oauth_timestamp=\"1580267358\", oauth_token=\"359172652-Hi3q6unNhxCRtjRputF8zlLPceNARr3ZnrkRPPSp\", oauth_version=\"1.0\""
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
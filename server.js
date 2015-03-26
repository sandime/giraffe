/**
 * Created by SHERRI on 3/26/15.
 */
var port = 8080,
    express = require('express'),
    app = express();
app.use('/', express.static(__dirname));
app.listen(port);
console.log('magic on http://localhost:'+port+'/index.html');
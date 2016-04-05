var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.set('json spaces', '\t')

require('./server/routes.js')(app);

app.listen(app.get('port'), function() {
    console.log('AWS Node server running at PORT', app.get('port'));
});

var express     = require('express'),
    engine      = require('meow-blog'),
    app         = express();

app.use('/public', express.static(__dirname + '/public'));

app.use('/bower_components', express.static(__dirname + '/bower_components'));

engine
    .config(function (pConfig) {
        pConfig
            .setConfig('indexPageName', './public/index.html')
            .setConfig('siteUrl', 'http://localhost:5000')
            .setConfig('username', 'Agent 47')
            .setConfig('disqus.shortname', 'HitmanAgent47')
            .setConfig('angularSocialShare', {
                facebook: {
                    appId: '123456789'
                },
                twitter: {
                    handle: 'HitmanAgent47'
                }
            });
    })
    .blog(app)
    .jobs(function (pJobs) {
        pJobs
            .startup()
            .then(function () {
                app.listen(5000, function () {
                    console.log('The server is running at port:5000');
                });
            });
    });

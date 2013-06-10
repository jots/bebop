module.exports = {
  createServer: function() {
    var connect = require('connect');

    var app = connect();
    app.use(connect.logger('dev'));
    app.use(connect.static(process.cwd()));
    app.use(connect.directory(process.cwd(), {hidden: true}));

    var server = require('http').createServer(app);

    server.run = function() {
      server.listen(3000, '0.0.0.0', function() {
        console.log('bebop listening on 0.0.0.0:3000')
      })
    }

    return server;
  }
}
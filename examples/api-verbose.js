// Generated by CoffeeScript 1.6.3
(function() {
  var TCPConnection, XbmcApi, config, connection, xbmcApi;

  TCPConnection = require('../lib/TCPConnection');

  XbmcApi = require('../lib/XbmcApi');

  config = require('./config');

  connection = new TCPConnection({
    host: config.connection.host,
    port: config.connection.port,
    verbose: true
  });

  xbmcApi = new XbmcApi;

  xbmcApi.setConnection(connection);

  console.log('done');

}).call(this);

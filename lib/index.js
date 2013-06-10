var wrapper = {}
var properties = {};

['client', 'server', 'reload', 'watcher', 'websocket'].forEach(function(property) {
  properties[property] = {
    enumerable: true,
    get: function() {
      return require('./' + property);
    }
  }
});

Object.defineProperties(wrapper, properties);

module.exports = wrapper;
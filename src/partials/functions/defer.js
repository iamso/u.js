  /**
   * defer function
   * a single "defer()" function that returns an object
   * that is both a deferred and a thenable promise
   * from https://gist.github.com/kirbysayshi/1129049
   * @param  {function} [callbacks] - placeholder for pending callbacks
   * @param  {*}        [value]     - placeholder for fulfilled value
   * @return {object}               - the defer object
   */
  u.defer = function (callbacks, value) {
    callbacks = [];
    return {
      resolve: function () {
        value = arguments;
        while (callbacks.length) {
          callbacks.shift().apply({}, value);
        }
        callbacks = 0;
        return this;
      },
      then: function (callback) {
        callbacks ? callbacks.push(callback) : callback.apply({}, value);
        return this;
      }
    };
  };

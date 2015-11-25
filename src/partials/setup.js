  /**
   * u version
   * @type {string}
   */
  u.version = '{{version}}';


  /**
   * u _defInit
   * list of deferred intializer functions
   * will be called in the given order on DOMContentLoaded and emptied afterwards
   * @type {array}
   */
  u._defInit = [];


  /**
   * u session id
   * @type {string}
   */
  u._id = u.uuid();


  /**
   * data object
   * @type {array}
   */
  u._data = [];


  /**
   * events object
   * @type {array}
   */
  u._events = [];
  u._events._index = function(el, index) {
    if ((index = el[u._id]) === undefined) {
      el[u._id] = index = u._data.push({}) - 1;
    }
    if (!this[index]) {
      this[index] = [];
    }
    return index;
  };
  u._events.add = function(el, e, fn, handler, index) {
    index = this._index(el);
    if (this._find(index, e, fn).length) {
      return false;
    }
    this[index].push({e: e, fn: fn, handler: handler});
    return true;
  };
  u._events._find = function(index, e, fn) {
    return this[index].filter(function(item) {
      return item.e === e && item.fn === fn;
    });
  };
  u._events.remove = function(el, e, fn, handler, index) {
    index = this._index(el);
    handler = this._find(index, e, fn);
    this[index] = this[index].filter(function(item) {
      return item.e !== e && item.fn !== fn;
    });
    return handler;
  };

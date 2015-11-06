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
  u._events.add = function(id, e, fn, handler) {
    if (this.find(id, e, fn).length) {
      return false;
    }
    this[id].push({e: e, fn: fn, handler: handler});
    return true;
  };
  u._events.find = function(id, e, fn) {
    return this[id].filter(function(item) {
      return item.e === e && item.fn === fn;
    });
  };
  u._events.remove = function(id, e, fn, handler) {
    handler = this.find(id, e, fn);
    this[id] = this[id].filter(function(item) {
      return item.e !== e && item.fn !== fn;
    });
    return handler;
  };


  /**
   * if $ is not used assign u to it
   * @type {object}
   */
  window.$ = window.$ || u;


  /**
   * assign u to µ and ujs
   * @type {object}
   */
  window.µ = window.ujs = u;

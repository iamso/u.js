/*!
 * u.js - Version 0.34.1
 * micro framework, utility library
 * Author: Steve Ottoz <so@dev.so>
 * Build date: 2017-08-21
 * Copyright (c) 2017 Steve Ottoz
 * Released under the MIT license
 */
;(function (root, factory) {
  'use strict';
  if (/^f/.test(typeof define) && define.amd) {
    define('ujs', [], factory);
  }
  else if (/^o/.test(typeof exports)) {
    module.exports = factory();
  }
  else {
    root.u = root.ujs = root.µ = factory();
  }
})(!/^u/.test(typeof window) ? window : this, function (undefined) {
  'use strict';

  var array = [];
  var prototype = 'prototype';


  /**
   * Init function (internal use)
   * @param {(string|object|function)} arg - selector, dom element or function
   */
  function Init(arg) {
    array.push.apply(this, arg && (arg.nodeType || /^o/.test(typeof arg)) && !u.isArray(arg) && arg !== null ? [arg] : u.isArray(arg) ? arg : '' + arg === arg ? u.isHtml(arg) ? u.toHtml(arg) : document.querySelectorAll(arg) : undefined);
  }


  /**
   * u main function
   * @param  {(string|object|function)} arg - selector, dom element or function
   * @return {(object|undefined)}             instance or execute function on dom ready
   */
  var u = function(arg) {
    return /^f/.test(typeof arg) ? /c/.test(document.readyState) ? arg() : u._defInit.push(arg) : new Init(arg);
  };


  /**
   * each function
   * @param  {array}    array      - array to iterate over
   * @param  {function} callback - function to call on each item
   * @return {object}   this
   */
  u.each = function(array, callback) {
    for(var i in array) {
      if (array.hasOwnProperty(i)) {
        callback.call(array[i], i, array[i]);
      }
    }
    return array;
  };


  /**
   * extend function
   * extend an object by any number of objects
   * @param  {object} base  - object to be extended or to extend u.js namespace
   * @return {object}         extended object
   */
  u.extend = function(base){
    var args = arguments,
        i,
        prop;

    args[1] || (args[1] = base, base = u);

    if (/^f/.test(typeof Object.assign)) {
      Object.assign.apply(Object, args);
    }
    else {
      for (i in args) {
        if (i > 0) {
          for (prop in args[i]) {
            if (args[i].hasOwnProperty(prop)) {
              base[prop] = args[i][prop];
            }
          }
        }
      }
    }
    return base;
  };


  /**
   * trim function
   * trim trailing whitespace
   * @param  {string} val - string to trim
   * @return {string}       trimmed value
   */
  u.trim = function(val) {
    return val.trim();
  };


  /**
   * debounce function
   * @param  {function} fn      - function to be debounced
   * @param  {number}   [delay] - delay for the debouncing
   * @param  {object}   [scope] - the scope to apply the function in
   * @return {function}         - function debouncing the passed in function
   */
  u.debounce = function(fn, delay, scope) {
    var timer = null;
    delay = delay || 250;
    return function () {
      var context = scope || this,
          args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  };


  /**
   * throttle function
   * @param  {function} fn           - function to be throttled
   * @param  {number}   [threshhold] - threshhold for the throttling
   * @param  {object}   [scope]      - the scope to apply the function in
   * @return {function}              - function throttling the passed in function
   */
  u.throttle = function(fn, threshhold, scope) {
    var last,
        deferTimer;
    threshhold = threshhold || 250;
    return function () {
      var context = scope || this,
          now = +new Date,
          args = arguments;
      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      }
      else {
        last = now;
        fn.apply(context, args);
      }
    };
  };


  /**
   * type function
   * get the type of an object
   * @param  {*}      obj - object to check
   * @return {string}       type of the object
   */
  u.type = function(obj) {
    return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
  };


  /**
   * array function
   * push, pop, shift, unshift, filter, map, slice
   * @param  {object} a - array to call the method on
   * @param  {*}      b - argument to pass to the method
   * @return {object}
   */
  u.each("push pop shift unshift filter map splice".split(" "), function(i,m) {
    u[m] = function(a, b) {
      return a[m](b);
    };
  });


  /**
   * inArray function
   * check if string is in array
   * @param  {string}  item  - string to find
   * @param  {object}  array - array to search
   * @return {boolean}
   */
  u.inArray = function(item, array) {
    return array.indexOf(item);
  };


  /**
   * isArray function
   * check if passed object is an array
   * @param  {object}  array - array to check
   * @return {boolean}
   */
  u.isArray = function(array) {
    return Array.isArray(array);
  };


  /**
   * toArray function
   * convert a NodeList object to an array
   * @param  {object} nl - NodeList object
   * @return {object}      array
   */
  u.toArray = u.makeArray = function(nl) {
    return array.slice.call(nl);
  },


  /**
   * toDash function
   * convert camelCase string to dash-separated
   * @param  {string} str - camelCase string
   * @return {string}       converted string
   */
  u.toDash = function(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };


  /**
   * toCamel function
   * convert dash-separated string to camelCase
   * @param  {string} str - dash-separated string
   * @return {string}       converted string
   */
  u.toCamel = function(str) {
    return str.toLowerCase().replace(/\b-([a-z])/g, function(all, char) {
      return char.toUpperCase();
    });
  };


  /**
   * isHtml function
   * check if a string contains html tags
   * @param  {string}  str - string to be checked
   * @return {boolean}
   */
  u.isHtml = function(str) {
    return /<[a-z][\s\S]*>/i.test(str);
  };


  /**
   * toHtml function
   * convert an html string to DOM elements
   * @param  {string}      str   - string to be converted
   * @param  {undefined}   [tmp] - placeholder for the temporary element
   * @return {object}            - nodeList of the converted elements
   */
  u.toHtml = function(str, tmp) {
    tmp = document.createElement('div');
    tmp.innerHTML = str;
    return str ? tmp.childNodes : [];
  };


  /**
   * bytes function
   * get byte size of a UTF-8 string
   * @param  {string} str - UTF-8 string
   * @return {number}       byte size
   */
  u.bytes = function(str) {
    return ~-encodeURI(str).split(/%..|./).length;
  };


  /**
   * uuid function
   * create a random uuid
   * from https://gist.github.com/jed/982883
   * @param  {string} [a] - placeholder
   * @return {string}       uuid
   */
  u.uuid = function uuid(a) {
    return a ? (a ^ Math.random() * 16 >> a/4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
  };


  /**
   * rid function
   * create a random id
   * @param  {number} [a] - length of the id (default 32)
   * @param  {number} [b] - radix (default 16)
   * @return {string}       random id
   */
  u.rid = function(a, b) {
    b = b || 16;
    return Array(a || 32).join(0).replace(/./g, function() {
      return(0| Math.random() * b).toString(b);
    });
  };


  /**
   * prfx function
   * get prefixed version of css properties
   * @param  {string}    a     - css property
   * @param  {undefined} b,c,d - placeholder variables
   * @return {string}            prefixed css property
   */
  u.prfx = function prfx(a,b,c,d){
    for (d?d=b.toUpperCase():b=4;!d&&b--;d=(d=d.replace(/-(.)/g,prfx)) in (new Image).style&&d) {
      d=[['Moz-','Webkit-','Ms-','O-'][b]]+a;
    }
    return d || a;
  },


  /**
   * stop function
   * preventDefault
   * @param  {object} e - event
   * @return {object} e - event
   */
  u.stop = function(e) {
    if (!e.preventDefault) {
      e.returnValue = false;
    } else {
      e.preventDefault();
    }
    return e;
  };


  /**
   * param function
   * prepare data as json or form encoded param string
   * @param  {object}  obj    - data to prepare
   * @param  {boolean} json   - true for json
   * @param  {string}  prefix - prefix for form encoded params
   * @return {string}           prepared string
   */
  u.param = function(obj, json, prefix) {
    if (!/^o/.test(typeof obj)) {
      return obj;
    }
    if (json) {
      return JSON.stringify(obj);
    }
    else {
      var str = [];
      for(var p in obj) {
        var k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
        if (obj.hasOwnProperty(p)) {
          str.push(typeof v === "object" ? u.param(v, json, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
      }
      return str.join("&");
    }
  };


  /**
   * parse function
   * @param  {string}          obj - string to be parsed
   * @return {(string|object)}       unparsed string or parsed object
   */
  u.parse = function(obj) {
    try {
      return JSON.parse(obj);
    }
    catch(ex) {
      return obj;
    }
  };


  /**
   * tpl function
   * parse a template string with values
   * from https://gist.github.com/haochi/1075080
   * @param  {string} str - string containing {{variables}}
   * @param  {object} obj - object containing values
   * @return {string}       parsed string
   */
  u.tpl = function(str, obj){
    return str.replace(/{{*([^}]+)*}}/g,
      function(tmp, val){
        tmp = obj;
        val.replace(/[^.]+/g,function(key){
          tmp = tmp[key] || '';
        });
        return tmp;
      }
    );
  };


  /**
   * ajax setup
   * @type {object}
   */
  u.ajax = {


    /**
     * ajax default options
     * @type {object}
     */
    opts: {
      async: true,
      json: true, // true to send as json
      auth: null,
      success: function() {},
      error: function() {},
      up: function() {},
      down: function() {}
    },


    /**
     * ajax content types
     * @type {object}
     */
    cts: {
      form: 'application/x-www-form-urlencoded',
      json: 'application/json'
    },


    /**
     * ajax send function (internal use)
     * @param  {object} opts   - ajax options
     * @param  {string} method - http method
     * @return {object} xhr    - xhr object
     */
    _send: function(opts, method) {

      // create function vars
      var cts = this.cts,
          xhr = new XMLHttpRequest(),
          data = u.param(opts.data, opts.json);

      // XMLHttpRequest state change function
      xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 400){
            // call success callback
            opts.success(u.parse(xhr.response || xhr.responseText), xhr.statusText);
          }
          else {
            // call error callback
            opts.error(u.parse(xhr.response || xhr.responseText), xhr.statusText);
          }
        }
      };

      if (xhr.upload) {
        // XMLHttpRequest upload progress function
        xhr.upload.onprogress = function(event) {
          if (event.lengthComputable) {
            // call progress callback
            opts.up(event.total, event.loaded);
          }
        };
      }

      // XMLHttpRequest download progress function
      xhr.onprogress = function(event) {
        if (event.lengthComputable) {
          // call progress callback
          opts.down(event.total, event.loaded);
        }
      };

      // open request and set headers
      xhr.open(method, opts.url, opts.async);
      xhr.setRequestHeader('Content-type', (opts.json ? cts.json : cts.form));
      xhr.setRequestHeader('Accept', cts.json);

      opts.headers && u.each(opts.headers, function(header, value) {
        xhr.setRequestHeader(header, value);
      });

      // if set, send authorization header
      if (opts.auth) {
        xhr.setRequestHeader('Authorization', opts.auth);
      }

      // send the request
      xhr.send(data || null);

      return xhr;

    },


    /**
     * set ajax defaults
     * @param  {object}    opts - new defaults
     * @return {undefined}
     */
    defaults: function(opts) {
      this.opts = u.extend({}, this.opts, opts);
    }
  };


  /**
   * get function
   * shortcut for ajx GET request
   * @param  {object} opts - ajax options
   * @return {object} xhr  - xhr object
   */
  u.get = function(opts) {
    opts = u.extend({}, u.ajax.opts, opts);
    opts.json = false;
    opts.url += (opts.url.match(/\?/ig) ? '&' : '?') + (u.param(opts.data) || '');
    return u.ajax._send(opts, 'GET');
  };


  /**
   * post, put, patch, options, delete functions
   * shortcut for ajax POST, PUT, PATCH, DELETE, HEAD and OPTIONS request
   * @param  {object} opts - ajax options
   * @return {object} xhr  - xhr object
   */
  var methods = ['post', 'put', 'patch', 'delete', 'head', 'options'];
  u.each(methods, function(index, method) {
    u[method] = function(opts) {
      opts = u.extend({}, u.ajax.opts, opts);
      return u.ajax._send(opts, method.toUpperCase());
    };
  });


  /**
   * getScript Function
   * load a script into global scope
   * @param  {string}   url      - url of the script to load
   * @param  {function} callback - function to call when loaded
   */
  u.getScript = function(url, callback) {
		var script = document.createElement('script');

		script.onload = callback || function(){};
		script.src = url;
    document.head.appendChild(script).parentNode.removeChild(script);
	};


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


  /**
   * u version
   * @type {string}
   */
  u.version = '0.34.1';


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


  /**
   * u prototype definition
   * @type {object}
   */
  u.fn = u[prototype] = Init[prototype] = {


    /**
     * default length
     * @type {number}
     */
    length: 0,


    /**
     * u.js object identifier
     * @type {string}
     */
    ujs: '0.34.1',


    /**
     * each method
     * use native forEach to iterate collection
     * @param  {function} callback - function to call on each element
     * @return {object}   this
     */
    each: function(callback) {
      u.each(u.toArray(this), callback);
      return this;
    },


    /**
     * on method
     * add event listeners to elements
     * @param  {string}   event   - event type i.e 'click'
     * @param  {function} handler - event handler function
     * @return {object}   this
     */
    on: function(event, selector, handler, fn) {
      if (/^f/.test(typeof selector)) {
        handler = selector;
        fn = handler;
      }
      else if (/^s/.test(typeof selector)) {
        fn = handler;
        handler = function(e) {
          var element;
          if (u(e.target).is(selector)) {
            element = e.target;
          }
          else if (u(e.target).parents(selector).length) {
            element = u(e.target).parents(selector)[0];
          }
          if (element) {
            fn.apply(element, [e]);
          }
        };
      }
      return this.each(function(index, el) {
        var events = event.split(' ');
        u.each(events, function(i, event){
          u._events.add(el, event, fn, handler) &&
          el.addEventListener(event, handler);
        });
      });
    },


    /**
     * one method
     * add one time event listeners to elements
     * @param  {string}   event   - event type i.e 'click'
     * @param  {function} handler - event handler function
     * @return {object}   this
     */
    one: function(event, selector, handler, fn) {
      if (/^f/.test(typeof selector)) {
        handler = selector;
        fn = handler;
      }
      else if (/^s/.test(typeof selector)) {
        fn = handler;
        handler = function(e) {
          var element;
          if (u(e.target).is(selector)) {
            element = e.target;
          }
          else if (u(e.target).parents(selector).length) {
            element = u(e.target).parents(selector)[0];
          }
          if (element) {
            fn.apply(element, [e]);
          }
        };
      }
      return this.each(function(index, el) {
        var events = event.split(' ');
        u.each(events, function(i, event){
          u._events.add(el, event, fn, handler);
          el.addEventListener(event, function temp(e) {
            el.removeEventListener(event, temp);
            u._events.remove(el, event, fn);
            handler.call(this,e);
          });
        });
      });
    },


    /**
     * off method
     * remove event listeners from elements
     * @param  {string}   event   - event type i.e 'click'
     * @param  {function} handler - event handler function
     * @return {object}   this
     */
    off: function(event, selector, handler, fn) {
      if (/^f/.test(typeof selector)) {
        handler = selector;
      }
      fn = handler;
      return this.each(function(index, el) {
        var events = event.split(' ');
        u.each(events, function(i, event, origEvent){
          origEvent = u._events.remove(el, event, fn);
          handler = origEvent.length ? origEvent[0].handler : handler;
          el.removeEventListener(event, handler);
        });
      });
    },


    /**
     * trigger method
     * trigger an event for an element
     * @param  {string} e      - event name
     * @param  {string} [data] - custom data
     * @param  {string} evt    - placeholder for the event object
     * @return {object} this
     */
    trigger: function(e, data, evt) {
      if (/^f/.test(typeof CustomEvent)) {
        evt = new CustomEvent(e, {
          detail: data,
          bubbles: true,
          cancelable: false
        });
      }
      else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(e, true, false, data);
      }
      return this.each(function(index, el) {
        el.dispatchEvent ?
          el.dispatchEvent(evt) :
          el.fireEvent('on' + e, evt);
      });
    },


    /**
     * hasClass method
     * check if element has class
     * @param  {string}  cls - class name to check for
     * @return {boolean}
     */
    hasClass: function(cls) {
      return this.length ? this[0].classList.contains(cls) : false;
    },


    /**
     * position method
     * get element position
     * @return {object} position
     */
    position: function() {
      return this.length ? {left: this[0].offsetLeft, top: this[0].offsetTop} : {left: 0, top: 0};
    },


    /**
     * offset method
     * get element offset
     * @return {object} offset
     */
    offset: function() {
      if (!this.length) {
        return {
          top: 0,
          left: 0
        };
      }
      var rect = this[0].getBoundingClientRect();
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      };
    },


    /**
     * scrollTop method
     * get or set element scrollTop
     * @param  {number} [val]     - new scrollTop
     * @return {number} scrollTop
     */
    scrollTop: function(val) {
      return val === undefined ? (this.length ? (this[0].scrollTop !== undefined ? this[0].scrollTop : (this[0].scrollY || this[0].pageYOffset)) : 0) : this.each(function(index, el) {
        el.scrollTop === undefined || el.scrollTo !== undefined ? el.scrollTo(0, val) : el.scrollTop = val;
      });
    },


    /**
     * scrollTo method
     * scroll to a certain position inside the element
     * @param  {number}   to       - position to scroll to
     * @param  {number}   duration - duration for the animation
     * @param  {function} callback - function to call when finished
     * @return {object}   this
     */
    scrollTo: function(to, duration, callback) {
      return this.each(function(index, el) {
        var _el = u(el),
            start = _el.scrollTop(),
            change = to - start,
            currentTime = 0,
            increment = 20;
        duration = duration || 1500;

        function easing(t, b, c, d) {
          t /= d/2;
          if (t < 1) {
            return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
          }
          t--;
          return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
        }

        function animateScroll() {
          currentTime += increment;
          var val = easing(currentTime, start, change, duration);
          _el.scrollTop(val);
          if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
          } else {
            callback && callback.apply(window);
          }
        }
        animateScroll();
      });
    },


    /**
     * scrollToTop method
     * shortcut for scroll to 0
     * @param  {number}   duration - duration for the animation
     * @param  {function} callback - function to call when finished
     * @return {object}   this
     */
    scrollToTop: function(duration, callback) {
      return this.each(function(index, el) {
        u(el).scrollTo(0, duration, callback);
      });
    },


    /**
     * width method
     * get or set element width
     * @param  {number} [val] - new width
     * @return {number} width
     */
    width: function(val) {
      return val === undefined ? (this.length ? this[0].clientWidth || this[0].innerWidth : 0) : this.each(function(index, el) {
        el.style.width = val + 'px';
      });
    },


    /**
     * outerWidth method
     * get element outer width
     * @param  {boolean} [margin]   - if true, includes margin
     * @return {number}  outerWidth
     */
    outerWidth: function(margin) {
      if (!this.length) {
        return 0;
      }
      return margin ? this[0].offsetWidth + parseInt(getComputedStyle(this[0]).marginLeft) + parseInt(getComputedStyle(this[0]).marginRight) : this[0].offsetWidth;
    },


    /**
     * height method
     * get or set element height
     * @param  {number} [val]  - new height
     * @return {number} height
     */
    height: function(val) {
      return val === undefined ? (this.length ? this[0].clientHeight || this[0].innerHeight : 0) : this.each(function(index, el) {
        el.style.height = val + 'px';
      });
    },


    /**
     * outerHeight method
     * get element outer height
     * @param  {boolean} [margin]    - if true, includes margin
     * @return {number}  outerHeight
     */
    outerHeight: function(margin) {
      if (!this.length) {
        return 0;
      }
      return margin ? this[0].offsetHeight + parseInt(getComputedStyle(this[0]).marginTop) + parseInt(getComputedStyle(this[0]).marginBottom) : this[0].offsetHeight;
    },


    /**
     * hide method
     * hide dom elements
     * @return {object} this
     */
    hide: function() {
      return this.each(function(index, el) {
        el.style.display = 'none';
      });
    },


    /**
     * show method
     * show dom elements
     * @return {object} this
     */
    show: function() {
      return this.each(function(index, el) {
        el.style.display = '';
      });
    },


    /**
     * attr method
     * get or set an attribute
     * @param  {string}          attr  - attribute name
     * @param  {string}          [val] - attribute value
     * @return {(string|object)}         attribute value or this
     */
    attr: function(attr, val) {
      return val === undefined ? (this.length ? this[0].getAttribute(attr) : null) : this.each(function(index, el) {
        el.setAttribute(attr, val);
      });
    },


    /**
     * removeAttr method
     * remove an attribute
     * @param  {string} attr - attribute name
     * @return {object} this
     */
    removeAttr: function(attr) {
      return this.each(function(index, el) {
        el.removeAttribute(attr);
      });
    },


    /**
     * hasAttr method
     * check if element has attribute
     * @param  {string} attr - attribute name
     * @return {boolean}
     */
    hasAttr: function(attr) {
      return this.length ? this[0].hasAttribute(attr) : false;
    },


    /**
     * prop method
     * get or set a property of the underlying DOM object
     * @param  {string}          prop  - property name
     * @param  {string}          [val] - property value
     * @return {(string|object)}         property value or this
     */
    prop: function(prop, val) {
      return val === undefined ? (this.length ? this[0][prop] : null) : this.each(function(index, el) {
        el[prop] = val;
      });
    },


    /**
     * data method
     * get or set a data attribute
     * @param  {string}          attr        - attribute name
     * @param  {string}          [val]       - attribute value
     * @param  {undefined}       [el]        - element placeholder
     * @param  {undefined}       [index]     - index placeholder
     * @param  {undefined}       [obj]       - object placeholder
     * @param  {undefined}       [attrCamel] - placeholder for attribute name in camelCase
     * @return {(string|object)}               attribute value or this
     */
    data: function(attr, val, el, index, obj, attrCamel) {

      if (attr === undefined) {
        if (!this.length) {
          return {};
        }
        el = this[0];
        obj = u.extend({}, el.dataset || {});

        if ((index = el[u._id]) === undefined) {
          el[u._id] = index = u._data.push(obj) - 1;
          return obj;
        }
        else {
          return u._data[index] = u.extend({}, obj, u._data[index]);
        }
      }
      else {
        attrCamel = u.toCamel(u.toDash(attr));
        if (val === undefined) {
          if (!this.length) {
            return null;
          }
          el = this[0];
          if ((index = el[u._id]) === undefined) {
            obj = {};
            obj[attrCamel] = el.dataset ? el.dataset[attrCamel] : el.getAttribute('data-' + attr);
            el[u._id] = index = u._data.push(obj) - 1;
            return obj[attrCamel];
          }
          else {
            return !!u._data[index][attrCamel] ? u._data[index][attrCamel] : (u._data[index][attrCamel] = el.dataset ? el.dataset[attrCamel] : el.getAttribute('data-' + attr));
          }
        }
        else {
          return this.each(function(index, el) {
            if ((index = el[u._id]) === undefined) {
              obj = {};
              obj[attrCamel] = val;
              el[u._id] = index = u._data.push(obj) - 1;
            }
            else {
              u._data[index][attrCamel] = val;
            }
          });
        }
      }

    },


    /**
     * removeData method
     * remove data attribute
     * @param  {string}    attr        - attribute name
     * @param  {undefined} [index]     - index placeholder
     * @param  {undefined} [attrCamel] - placeholder for attribute name in camelCase
     * @return {object}                  this
     */
    removeData: function(attr, index, attrCamel) {
      return this.each(function(i, el) {
        if (attr !== undefined) {
          attrCamel = u.toCamel(u.toDash(attr));
          if ((index = el[u._id]) !== undefined) {
            el.dataset ? delete el.dataset[attrCamel] : el.removeAttribute('data-' + attr);
            delete u._data[index][attrCamel];
          }
        }
      });
    },


    /**
     * css method
     * get or set css properties
     * @param  {(string|object)} props - property name or object with names and values
     * @param  {string}          [val] - property value
     * @return {(string|object)}         property value or this
     */
    css: function(props, val) {
      if (/^o/.test(typeof props)) {
        for(var prop in props) {
          var prefixed = u.prfx(prop);
          if (props.hasOwnProperty(prop)) {
            this.each(function(index, el) {
              el.style[prefixed] = props[prop];
            });
          }
        }
        return this;
      }
      else {
        return val === undefined ? (this.length ? getComputedStyle(this[0])[props] : null) : this.each(function(index, el) {
          var prefixed = u.prfx(props);
          el.style[prefixed] = val;
        });
      }
    },


    /**
     * append method
     * append child element(s) to this element
     * @param  {object} children - dom element(s) to be appended
     * @return {object} this
     */
    append: function(children) {
      return this.each(function(index, el) {
        children.each(function(index, child) {
          el.appendChild(child);
        });
      });
    },


    /**
     * prepend method
     * prepend child element(s) to this element
     * @param  {object} children - dom element(s) to be prepended
     * @return {object} this
     */
    prepend: function(children) {
      return this.each(function(index, el, first) {
        first = el.firstChild;
        children.each(function(index, child) {
          el.insertBefore(child, first);
        });
      });
    },


    /**
     * before method
     * insert element(s) before this element
     * @param  {object} siblings - element(s) to be inserted before this
     * @return {object} this
     */
    before: function(siblings) {
      return this.each(function(index, el) {
        siblings.each(function(index, sibling) {
          el.insertAdjacentHTML('beforebegin', sibling.outerHTML);
        });
      });
    },


    /**
     * after method
     * insert element(s) after this element
     * @param  {object} siblings - element(s) to be inserted after this
     * @return {object} this
     */
    after: function(siblings) {
      return this.each(function(index, el) {
        siblings.each(function(index, sibling) {
          el.insertAdjacentHTML('afterend', sibling.outerHTML);
        });
      });
    },


    /**
     * first method
     * get the first element of a selection
     * @return {object} element
     */
    first: function() {
      return this.length ? u(this[0]) : this;
    },


    /**
     * last method
     * get the last element of a selection
     * @return {object} element
     */
    last: function() {
      return this.length ? u(this[this.length - 1]) : this;
    },


    /**
     * eq method
     * get element of specified index
     * @param  {number} index - index to get
     * @return {object} element (u object)
     */
    eq: function(index) {
      return u(this[index]);
    },


    /**
     * get method
     * get element of specified index
     * @param  {number} index - index to get
     * @return {object} element
     */
    get: function(index) {
      return this[index];
    },


    /**
     * clone method
     * clone an element
     * @return {object} element clone
     */
    clone: function() {
      return this.length ? u(this[0].cloneNode(true)) : this;
    },


    /**
     * contains method
     * check if child is contained in this element
     * @param  {(string|object)} child - element or css selector
     * @return {boolean}
     */
    contains: function(child) {
      return this.length ? (/^o/.test(typeof child) ? this[0] !== child[0] && this[0].contains(child[0]) : this[0].querySelector(child) !== null) : false;
    },


    /**
     * find method
     * find a selector inside of this element
     * @param  {string} sel - selector to find
     * @return {object}       matching elements
     */
    find: function(sel) {
      return this.length ? u(u.toArray(this[0].querySelectorAll(sel))) : this;
    },


    /**
     * filter method
     * filter elements by selector or filter function
     * @param  {string|function} filter - selector or filter function
     * @return {object}                   matching elements
     */
    filter: function(filter) {
      return u(array.filter.call(this, function(el, index) {
        return /^f/.test(typeof filter) ? filter(index, el) : u(el).is(filter);
      }));
    },


    /**
     * is method
     * matches the element against a selector
     * @param  {string}  sel - selector to match
     * @return {boolean}
     */
    is: function(sel) {
      if (!this.length) {
        return false;
      }
      var m = (this[0].matches || this[0].matchesSelector || this[0].msMatchesSelector || this[0].mozMatchesSelector || this[0].webkitMatchesSelector || this[0].oMatchesSelector || function(s) {
        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
      });
      return m.call(this[0], sel);
    },


    /**
     * children method
     * get child elements
     * @return {object} child elements
     */
    children: function() {
      return this.length ? u(u.toArray(this[0].children)) : this;
    },


    /**
     * index method
     * get the index of an element
     * @param  {object|string} [el] - elements or css selector
     * @return {number}               index
     */
    index: function(el) {
      if (!el) {
    		return this[0] ? this.first().prevAll().length : -1;
    	}
    	if (''+el === el) {
    		return u.toArray(u(el)).indexOf(this[0]);
    	}
      el = el.ujs ? el[0] : el;
    	return u.toArray(this).indexOf(el);
    },


    /**
     * prev method
     * get previous element sibling
     * @param  {string} [sel] - selector to filter siblings
     * @return {object}         sibling element
     */
    prev: function(sel) {
      return this.length ? u(u.toArray(this.prevAll(sel)).shift()) : this;
    },


    /**
     * prevAll method
     * get all previous element siblings
     * @param  {string} [sel] - selector to filter siblings
     * @return {object}         sibling elements
     */
    prevAll: function(sel) {
      if (!this.length) {
        return this;
      }
      var matched = [],
    	 		el = this[0];

    	while (el = el.previousElementSibling) {
    		sel ?
    			(u(el).is(sel) && matched.push(el)) :
    			matched.push(el);
    	}
    	return u(matched);
    },


    /**
     * next method
     * get next element sibling
     * @param  {string} [sel] - selector to filter siblings
     * @return {object}         sibling element
     */
    next: function(sel) {
      return this.length ? u(u.toArray(this.nextAll(sel)).shift()) : this;
    },


    /**
     * nextAll method
     * get all next element siblings
     * @param  {string} [sel] - selector to filter siblings
     * @return {object}         sibling elements
     */
    nextAll: function(sel) {
      if (!this.length) {
        return this;
      }
      var matched = [],
    	 		el = this[0];

    	while (el = el.nextElementSibling) {
    		sel ?
    			(u(el).is(sel) && matched.push(el)) :
    			matched.push(el);
    	}
    	return u(matched);
    },


    /**
     * siblings method
     * get element siblings
     * @param  {string} [sel] - selector to filter siblings
     * @return {object}         sibling elements
     */
    siblings: function(sel) {
      if (!this.length) {
        return this;
      }
      var el = this[0];
      return u(array.filter.call(el.parentNode.children, function(child) {
        return sel ? child !== el && u(child).is(sel) : child !== el;
      }));
    },


    /**
     * parent method
     * get the parent element
     * @return {object} element
     */
    parent: function() {
      return this.length ? u(this[0].parentNode): this;
    },


    /**
     * parents method
     * get the parent elements
     * @return {object} element
     */
    parents: function(sel) {
      if (!this.length) {
        return this;
      }
      var parents = [],
          finished = false,
          currentElement = this[0];

      while (!finished) {
        currentElement = currentElement.parentNode;
        if (currentElement) {
          if (sel === undefined) {
            parents.push(currentElement);
          }
          else if (u(currentElement).is(sel)) {
            parents.push(currentElement);
          }
        }
        else {
          finished = true;
        }
      }
      return u(parents);
    },


    /**
     * text method
     * get or set the textContent value
     * @param  {string}          [val] - text value
     * @return {(string|object)}         text value or this
     */
    text: function(val) {
      return val === undefined ? (this.length ? this[0].textContent : null) : this.each(function(index, el) {
        el.textContent = val;
      });
    },


    /**
     * html method
     * get or set innerHTML value
     * @param  {string}          [val] - html value
     * @return {(string|object)}         html value or this
     */
    html: function(val) {
      return val === undefined ? (this.length ? this[0].innerHTML : null) : this.each(function(index, el) {
        el.innerHTML = val;
      });
    },


    /**
     * outerHTML method
     * get or set outerHTML value
     * @param  {string}          [val] - html value
     * @return {(string|object)}         html value or this
     */
    outerHTML: function(val) {
      return val === undefined ? (this.length ? this[0].outerHTML : null) : this.each(function(index, el) {
        el.outerHTML = val;
      });
    },


    /**
     * val method
     * get or set the value property of inputs and textareas
     * @param  {string}          [val] - text value
     * @return {(string|object)}         text value or this
     */
    val: function(val) {
      return val === undefined ? (this.length ? this[0].value : null) : this.each(function(index, el) {
        el.value = val;
      });
    },


    /**
     * empty method
     * empty the content of elements
     * @return {object} this
     */
    empty: function() {
      return this.each(function(index, el) {
        el.innerHTML = '';
      });
    },


    /**
     * remove method
     * remove element from dom
     * @return {object} element
     */
    remove: function() {
      return this.each(function(index, el) {
        el.parentNode.removeChild(el);
      });
    },


    /**
     * bytes method
     * get byte size of an element's text
     * @return {number} byte size
     */
    bytes: function() {
      return this.length ? u.bytes(this[0].value || this[0].textContent) : 0;
    },


    /**
     * toArray method
     * get the current collection as an array
     * @return {object} array of this
     */
    toArray: function() {
      return u.toArray(this);
    },


    /**
     * focus method
     * give an element focus
     * @return {object} this
     */
    focus: function() {
      this.length && this[0].focus();
      return this;
    },


    /**
     * blur method
     * remove focus from elements
     * @return {object} this
     */
    blur: function() {
      return this.each(function(index, el) {
        el.blur();
      });
    },


    /**
     * extend method
     * extend the u.js prototype object
     * @return {object} u.js prototype
     */
    extend: function() {
      var args = u.toArray(arguments);
      args.unshift(u.fn);
      return u.extend.apply(this, args);
    },


    /**
     * for some reason is needed to get an array-like
     * representation instead of an object
     */
    splice: array.splice
  };


  /**
   * map class method names
   * @type {array}
   */
  var props = ['addClass', 'removeClass', 'toggleClass'],
      maps = ['add', 'remove', 'toggle'];


  /**
   * addClass, removeClass and toggleClass methods
   * @param  {string}  cls    - class name
   * @param  {boolean} force  - (only for toggle) if true add, if false remove class
   * @return {object}  this
   */
  u.each(props, function(index, prop) {
    u[prototype][prop] = function(cls, force) {
      return this.each(function(i, el) {
        var classes =  cls.split(' ');
        u.each(classes, function(ii, cls, args){
          args = force !== undefined ? [cls, !!force] : [cls];
          el.classList[maps[index]].apply(el.classList, args);
        });
      });
    };
  });


  if (!/^u/.test(typeof document)) {

    /**
     * DOMContentLoaded function calls
     * call functions registered with u(func)
     */
    u(document).on('DOMContentLoaded', function (e) {
      for (var i in u._defInit) {
        if (u._defInit.hasOwnProperty(i)) {
          u._defInit[i](e);
        }
      }
      u._defInit = [];
    });

  }




  /**
   * Return u to the factory
   */
  return u;

});


/*!
 * u.js - Version 0.34.1 - IE 9 fix
 * Fix for the missing classList in IE 9
 * Author: Steve Ottoz <so@dev.so>
 * Build date: 2017-08-21
 * Copyright (c) 2017 Steve Ottoz
 * Released under the MIT license
 */
;(function(u, window, document) {
  'use strict';


  /**
   * wait for body to be available
   * insert function call at beginning of list to execute it before any other registered function
   */
  u(function () {


    /**
     * overwrite class methods if classList is not defined
     */
    if (!document.body.classList) {


      /**
       * hasClass method
       * check if element has class
       * @param  {string}  cls - class name to check for
       * @return {boolean}
       */
      u.fn.hasClass = function(cls) {
        return new RegExp('(^| )' + cls + '( |$)', 'gi').test(this[0].className);
      };


      /**
       * addClass method
       * @param  {string} cls  - class name
       * @return {object} this
       */
      u.fn.addClass = function(cls) {
        return this.each(function(i, el) {
          el.className += ' ' + cls;
        });
      };


      /**
       * removeClass method
       * @param  {string} cls  - class name
       * @return {object} this
       */
      u.fn.removeClass = function(cls) {
        return this.each(function(i, el) {
          el.className = el.className.replace(new RegExp('(^|\\b)' + cls.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        });
      };


      /**
       * toggleClass method
       * @param  {string} cls  - class name
       * @return {object} this
       */
      u.fn.toggleClass = function(cls) {
        return this.each(function(i, el) {
          var classes = el.className.split(' '),
              existingIndex = classes.indexOf(cls);

          if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
          }
          else {
            classes.push(cls);
          }

          el.className = classes.join(' ');
        });
      };

    }


  });


})(u, window, document);

/**
 * requestAnimationFrame polyfill
 */
;(function(window) {
  'use strict';

  var lastTime = 0,
      vendors = ['ms', 'moz', 'webkit', 'o'],
      x;
  for(x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
})(window);

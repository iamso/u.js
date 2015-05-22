/*!
 * u.js - Version 0.8.2
 * micro framework, utility library
 * Author: Steve Ottoz <so@dev.so>
 * Build date: 2015-05-22
 * Copyright (c) 2015 Steve Ottoz
 * Released under the MIT license
 */
(function(win, doc, arr, proto, undef) {
  'use strict';


  /**
   * Init function (internal use)
   * @param {(string|object|function)} arg - selector, dom element or function
   */
  function Init(arg) {
    arr.push.apply(this, arg && (arg.nodeType || /^o/.test(typeof arg)) && !u.isArray(arg) && arg !== null ? [arg] : u.isArray(arg) ? arg : '' + arg === arg ? u.isHtml(arg) ? u.toHtml(arg) : doc.querySelectorAll(arg) : undef);
  }


  /**
   * u main function
   * @param  {(string|object|function)} arg - selector, dom element or function
   * @return {(object|undefined)}             instance or execute function on dom ready
   */
  win.u = function(arg) {
    return /^f/.test(typeof arg) ? /c/.test(doc.readyState) ? arg() : u(doc).on('DOMContentLoaded', arg) : new Init(arg);
  };


  /**
   * u version
   * @type {string}
   */
  u.version = '0.8.2';


  /**
   * u prototype definition
   * @type {object}
   */
  u.fn = u[proto] = Init[proto] = {


    /**
     * default length
     * @type {number}
     */
    length: 0,


    /**
     * on method
     * add event listeners to elements
     * @param  {string}   event   - event type i.e 'click'
     * @param  {function} handler - event handler function
     * @return {object}   this
     */
    on: function(event, handler) {
      return this.each(function(index, el) {
        var events = event.split(' ');
        u.each(events, function(i, event){
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
    one: function(event, handler) {
      return this.each(function(index, el) {
        var events = event.split(' ');
        u.each(events, function(i, event){
          el.addEventListener(event, function temp(e) {
            el.removeEventListener(event, temp);
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
    off: function(event, handler) {
      return this.each(function(index, el) {
        var events = event.split(' ');
        u.each(events, function(i, event){
          el.removeEventListener(event, handler);
        });
      });
    },


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
     * hasClass method
     * check if element has class
     * @param  {string}  cls - class name to check for
     * @return {boolean}
     */
    hasClass: function(cls) {
      return this[0].classList.contains(cls);
    },


    /**
     * position method
     * get element position
     * @return {object} position
     */
    position: function() {
      return {left: this[0].offsetLeft, top: this[0].offsetTop};
    },


    /**
     * offset method
     * get element offset
     * @return {object} offset
     */
    offset: function() {
      var rect = this[0].getBoundingClientRect();
      return {
        top: rect.top + doc.body.scrollTop,
        left: rect.left + doc.body.scrollLeft
      };
    },


    /**
     * scrollTop method
     * get or set element scrollTop
     * @param  {number} [val]     - new scrollTop
     * @return {number} scrollTop
     */
    scrollTop: function(val) {
      return val === undef ? this[0].scrollTop : this.each(function(index, el) {
        el.scrollTop = val;
      });
    },


    /**
     * width method
     * get or set element width
     * @param  {number} [val] - new width
     * @return {number} width
     */
    width: function(val) {
      return val === undef ? this[0].clientWidth || this[0].innerWidth : this.each(function(index, el) {
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
      return margin ? this[0].offsetWidth + parseInt(getComputedStyle(this[0]).marginLeft) + parseInt(getComputedStyle(this[0]).marginRight) : this[0].offsetWidth;
    },


    /**
     * height method
     * get or set element height
     * @param  {number} [val]  - new height
     * @return {number} height
     */
    height: function(val) {
      return val === undef ? this[0].clientHeight || this[0].innerHeight : this.each(function(index, el) {
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
      return val === undef ? this[0].getAttribute(attr) : this.each(function(index, el) {
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
     * @return {object} this
     */
    hasAttr: function(attr) {
      return this[0].hasAttribute(attr);
    },


    /**
     * data method
     * get or set a data attribute
     * @param  {string}          attr    - attribute name
     * @param  {string}          [val]   - attribute value
     * @param  {undefined}       [el]    - element placeholder
     * @param  {undefined}       [index] - index placeholder
     * @param  {undefined}       [obj]   - object placeholder
     * @return {(string|object)}         attribute value or this
     */
    data: function(attr, val, el, index, obj) {

      // Shorthand Version
      //
      // return val === undef ?
      //   (index = el[u._id]) === undef ?
      //     u._data[el[u._id] = index = u._data.push({[attr]: this[0].getAttribute('data-' + attr)}) - 1][attr] :
      //     !!u._data[index][attr] ?
      //       u._data[index][attr] :
      //       (u._data[index][attr] = this[0].getAttribute('data-' + attr)) :
      //   this.each(function(index, el) {
      //     (index = el[u._id]) === undef ?
      //       el[u._id] = index = u._data.push({[attr]: val}) - 1 :
      //       u._data[index][attr] = val;
      //   });

      // Normal Version
      //
      if (val === undef) {
        el = this[0];
        if ((index = el[u._id]) === undef) {
          obj = {};
          obj[attr] = this[0].getAttribute('data-' + attr);
          el[u._id] = index = u._data.push(obj) - 1;
          return obj[attr];
        }
        else {
          return !!u._data[index][attr] ? u._data[index][attr] : (u._data[index][attr] = this[0].getAttribute('data-' + attr));
        }
      }
      else {
        return this.each(function(index, el) {
          if ((index = el[u._id]) === undef) {
            obj = {};
            obj[attr] = val;
            el[u._id] = index = u._data.push(obj) - 1;
          }
          else {
            u._data[index][attr] = val;
          }
        });
      }

    },


    /**
     * css method
     * get or set css properties
     * @param  {(string|object)} props - property name or object with names and values
     * @param  {string}          [val] - property value
     * @return {(string|object)}         property value or this
     */
    css: function(props, val) {
      if (typeof props === 'object') {
        for(var prop in props) {
          this.each(function(index, el) {
            el.style[prop] = props[prop];
          });
        }
        return this;
      } else {
        return val === undef ? this[0].style[props] : this.each(function(index, el) {
          el.style[props] = val;
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
      return u(this[0]);
    },


    /**
     * last method
     * get the last element of a selection
     * @return {object} element
     */
    last: function() {
      return u(this[this.length - 1]);
    },


    /**
     * get method
     * get element of specified index
     * @param  {number} index - index to get
     * @return {object} element
     */
    get: function(index) {
      return u(this[index]);
    },


    /**
     * clone method
     * clone an element
     * @return {object} element clone
     */
    clone: function() {
      return u(this[0].cloneNode(true));
    },


    /**
     * contains method
     * check if child is contained in this element
     * @param  {(string|object)} child - element or css selector
     * @return {boolean}
     */
    contains: function(child) {
      return /^o/.test(typeof child) ? this[0] !== child[0] && this[0].contains(child[0]) : this[0].querySelector(child) !== null;
    },


    /**
     * find method
     * find a selector inside of this element
     * @param  {string} sel - selector to find
     * @return {object}       matching elements
     */
    find: function(sel) {
      return u(u.toArray(this[0].querySelectorAll(sel)));
    },


    /**
     * children method
     * get child elements
     * @return {object} child elements
     */
    children: function() {
      return u(u.toArray(this[0].children));
    },


    /**
     * prev method
     * get previous element sibling
     * @return {object} sibling element
     */
    prev: function() {
      return u(this[0].previousElementSibling);
    },


    /**
     * next method
     * get next element sibling
     * @return {object} sibling element
     */
    next: function() {
      return u(this[0].nextElementSibling);
    },


    /**
     * siblings method
     * get element siblings
     * @param  {string} [sel] - selector to filter siblings
     * @return {object}         sibling elements
     */
    siblings: function(sel) {
      var el = this[0];
      return u(arr.filter.call(el.parentNode.children, function(child) {
        return sel ? child !== el && u(child).is(sel) : child !== el;
      }));
    },


    /**
     * filter method
     * filter elements by selector or filter function
     * @param  {string|function} filter - selector or filter function
     * @return {object}                   matching elements
     */
    filter: function(filter) {
      return u(arr.filter.call(this, function(el, index) {
        return /^f/.test(typeof filter) ? filter(index, el) : u(el).is(filter);
      }));
    },


    /**
     * text method
     * get or set the textContent value
     * @param  {string}          [val] - text value
     * @return {(string|object)}         text value or this
     */
    text: function(val) {
      return val === undef ? this[0].textContent : this.each(function(index, el) {
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
      return val === undef ? this[0].innerHTML : this.each(function(index, el) {
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
      return val === undef ? this[0].outerHTML : this.each(function(index, el) {
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
      return val === undef ? this[0].value : this.each(function(index, el) {
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
     * bytes method
     * get byte size of an element's text
     * @return {number} byte size
     */
    bytes: function() {
      return u.bytes(this[0].value || this[0].textContent);
    },


    /**
     * parent method
     * get the parent element
     * @return {object} element
     */
    parent: function() {
      return (this.length < 2) ? u(this[0].parentNode): [];
    },


    /**
     * parents method
     * get the parent elements
     * @return {object} element
     */
    parents: function(sel) {
      var parents = [],
          finished = false,
          currentElement = this[0];

      while (!finished) {
        currentElement = currentElement.parentNode;
        if (currentElement) {
          if (sel === undef) {
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
     * trigger method
     * trigger an event for an element
     * @param  {string} e    - event name
     * @return {object} this
     */
    trigger: function(e) {
      if (document.createEvent) {
        var event = document.createEvent('HTMLEvents');
        event.initEvent(e, true, false);
        return this.each(function(index, el) {
          el.dispatchEvent(event);
        });
      } else {
        return this.each(function(index, el) {
          el.fireEvent('on' + e);
        });
      }
    },


    /**
     * is method
     * matches the element against a selector
     * @param  {string}  sel - selector to match
     * @return {boolean}
     */
    is: function(sel) {
      var m = (this[0].matches || this[0].matchesSelector || this[0].msMatchesSelector || this[0].mozMatchesSelector || this[0].webkitMatchesSelector || this[0].oMatchesSelector);
      if (m) {
        return m.call(this[0], sel);
      } else if (this[0].parentNode) {
        var n = this[0].parentNode.querySelectorAll(sel);
        for (var i = n.length; i--;) {
          if (n[i] === this[0]) {
            return true;
          }
        }
      }
      return false;
    },


    /**
     * focus method
     * give an element focus
     * @return {object} this
     */
    focus: function() {
      this[0].focus();
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
     * for some reason is needed to get an array-like
     * representation instead of an object
     */
    splice: arr.splice
  };


  /**
   * each function
   * @param  {array}    arr      - array to iterate over
   * @param  {function} callback - function to call on each item
   * @return {object}   this
   */
  u.each = function(array, callback) {
    for(var i in array) {
      callback.call(array[i], i, array[i]);
    }
    return array;
  };


  /**
   * map class method names
   * @type {array}
   */
  var props = ['addClass', 'removeClass', 'toggleClass'],
      maps = ['add', 'remove', 'toggle'];


  /**
   * addClass, removeClass and toggleClass methods
   * @param  {string} cls  - class name
   * @return {object} this
   */
  props.forEach(function(prop, index) {
    u[proto][prop] = function(cls) {
      return this.each(function(i, el) {
        var classes =  cls.split(' ');
        u.each(classes, function(ii, cls){
          el.classList[maps[index]](cls);
        });
      });
    };
  });


  /**
   * trim function
   * trim trailing whitespace
   * @param  {string} val - string to trim
   * @return {string}       trimmed value
   */
  u.trim = function(val) {
    return val.replace(/^\s+|\s+$/g, '');
  };


  /**
   * extend function
   * extend an object by another object
   * @param  {object} base  - object to be extended or object to extend u.fn by
   * @param  {object} [ext] - object to extend by
   * @return {object}         extended object
   */
  u.extend = u.fn.extend = function(base, ext){
    var result = {},
        prop;

    arguments[1] || (ext = base, base = result = u.fn);

    for(prop in base) {
      result[prop] = (ext[prop] === undef) ? base[prop] : ext[prop];
    }
    for(prop in ext) {
      result[prop] = ext[prop];
    }
    return result;
  };


  /**
   * array function
   * push, pop, shift, unshift, filter, map, slice
   * @param  {object} a - array to call the method on
   * @param  {*}      b - argument to pass to the method
   * @return {object}
   */
  "push pop shift unshift filter map splice".split(" ").forEach(function(m) {
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
  u.toArray = function(nl) {
    return arr.slice.call(nl);
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
    return d;
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
    if (json) {
      return JSON.stringify(obj);
    }
    else {
      var str = [];
      for(var p in obj) {
        var k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
        str.push(typeof v === "object" ? u.param(v, json, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
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
          tmp = tmp[key];
        });
        return tmp;
      }
    );
  },


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
      sync: true,
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
            opts.success(u.parse(xhr.response), xhr.statusText);
          }
          else {
            // call error callback
            opts.error(u.parse(xhr.response), xhr.statusText);
          }
        }
      };

      // XMLHttpRequest upload progress function
      xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
          // call progress callback
          opts.up(event.total, event.loaded);
        }
      };

      // XMLHttpRequest download progress function
      xhr.onprogress = function(event) {
        if (event.lengthComputable) {
          // call progress callback
          opts.down(event.total, event.loaded);
        }
      };

      // open request and set headers
      xhr.open(method, opts.url, opts.sync);
      xhr.setRequestHeader('Content-type', (opts.json ? cts.json : cts.form));
      xhr.setRequestHeader('Accept', cts.json);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

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
      this.opts = u.extend(this.opts, opts);
    }
  };


  /**
   * get function
   * shortcut for ajx GET request
   * @param  {object} opts - ajax options
   * @return {object} xhr  - xhr object
   */
  u.get = function(opts) {
    opts = u.extend(u.ajax.opts, opts);
    opts.json = false;
    opts.url += '?' + (u.param(opts.data) || '');
    return u.ajax._send(opts, 'GET');
  };


  /**
   * post, put, patch, options, delete functions
   * shortcut for ajax POST, PUT, PATCH, OPTIONS and DELETE request
   * @param  {object} opts - ajax options
   * @return {object} xhr  - xhr object
   */
  var methods = ['post', 'put', 'patch', 'options', 'delete'];
  methods.forEach(function(method, index) {
    u[method] = function(opts) {
      opts = u.extend(u.ajax.opts, opts);
      return u.ajax._send(opts, method.toUpperCase());
    };
  });


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
   * if $ is not used assign u to it
   * @type {object}
   */
  win.$ = win.$ || u;


  /**
   * assign u to µ
   * @type {object}
   */
  win.µ = u;

})(window, document, [], 'prototype');


/*!
 * u.js - Version 0.8.2 - IE 9 fix
 * Fix for the missing classList in IE 9
 * Author: Steve Ottoz <so@dev.so>
 * Build date: 2015-05-22
 * Copyright (c) 2015 Steve Ottoz
 * Released under the MIT license
 */
(function(u,window,document) {
  'use strict';


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
      return this.each(function(el) {
        el.className += ' ' + cls;
      });
    };


    /**
     * removeClass method
     * @param  {string} cls  - class name
     * @return {object} this
     */
    u.fn.removeClass = function(cls) {
      return this.each(function(el) {
        el.className = el.className.replace(new RegExp('(^|\\b)' + cls.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      });
    };


    /**
     * toggleClass method
     * @param  {string} cls  - class name
     * @return {object} this
     */
    u.fn.toggleClass = function(cls) {
      return this.each(function(el) {
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

})(u,window,document);

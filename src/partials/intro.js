
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

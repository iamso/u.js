
;(function (root, factory) {
  'use strict';
  var win = !/^u/.test(typeof window) ? window : root;
  var doc = !/^u/.test(typeof document) ? document : null;
  if (/^f/.test(typeof define) && define.amd) {
    define([], factory(win, doc, [], 'prototype'));
  } else if (/^o/.test(typeof exports)) {
    module.exports = factory(win, doc, [], 'prototype');
  } else {
    root.u = root.ujs = root.µ = factory(win, doc, [], 'prototype');
  }
})(!/^u/.test(typeof global) ? global : this.window || this.global, function (window, document, array, prototype, undefined) {
  'use strict';

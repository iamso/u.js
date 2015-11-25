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

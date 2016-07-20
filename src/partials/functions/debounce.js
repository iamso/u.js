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

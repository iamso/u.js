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

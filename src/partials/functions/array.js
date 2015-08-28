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

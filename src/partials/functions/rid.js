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

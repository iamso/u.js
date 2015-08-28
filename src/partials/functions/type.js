  /**
   * type function
   * get the type of an object
   * @param  {*}      obj - object to check
   * @return {string}       type of the object
   */
  u.type = function(obj) {
    return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
  };

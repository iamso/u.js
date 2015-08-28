  /**
   * bytes function
   * get byte size of a UTF-8 string
   * @param  {string} str - UTF-8 string
   * @return {number}       byte size
   */
  u.bytes = function(str) {
    return ~-encodeURI(str).split(/%..|./).length;
  };

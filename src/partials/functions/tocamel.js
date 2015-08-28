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

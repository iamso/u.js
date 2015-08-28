  /**
   * toDash function
   * convert camelCase string to dash-separated
   * @param  {string} str - camelCase string
   * @return {string}       converted string
   */
  u.toDash = function(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };

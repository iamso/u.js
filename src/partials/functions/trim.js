  /**
   * trim function
   * trim trailing whitespace
   * @param  {string} val - string to trim
   * @return {string}       trimmed value
   */
  u.trim = function(val) {
    return val.replace(/^\s+|\s+$/g, '');
  };

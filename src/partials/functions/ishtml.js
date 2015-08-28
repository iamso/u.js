  /**
   * isHtml function
   * check if a string contains html tags
   * @param  {string}  str - string to be checked
   * @return {boolean}
   */
  u.isHtml = function(str) {
    return /<[a-z][\s\S]*>/i.test(str);
  };

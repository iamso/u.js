  /**
   * toHtml function
   * convert an html string to DOM elements
   * @param  {string}      str   - string to be converted
   * @param  {undefined}   [tmp] - placeholder for the temporary element
   * @return {object}            - nodeList of the converted elements
   */
  u.toHtml = function(str, tmp) {
    tmp = document.createElement('div');
    tmp.innerHTML = str;
    return str ? tmp.childNodes : [];
  };

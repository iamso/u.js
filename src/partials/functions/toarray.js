  /**
   * toArray function
   * convert a NodeList object to an array
   * @param  {object} nl - NodeList object
   * @return {object}      array
   */
  u.toArray = function(nl) {
    return array.slice.call(nl);
  },

  /**
   * parse function
   * @param  {string}          obj - string to be parsed
   * @return {(string|object)}       unparsed string or parsed object
   */
  u.parse = function(obj) {
    try {
      return JSON.parse(obj);
    }
    catch(ex) {
      return obj;
    }
  };

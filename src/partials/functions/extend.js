  /**
   * extend function
   * extend an object by any number of objects
   * @param  {object} base  - object to be extended or to extend u.js namespace
   * @return {object}         extended object
   */
  u.extend = function(base){
    var args = arguments,
        i,
        prop;

    args[1] || (args[1] = base, base = u);

    for (i in args) {
      if (i > 0) {
        for(prop in args[i]) {
          base[prop] = args[i][prop];
        }
      }
    }
    return base;
  };

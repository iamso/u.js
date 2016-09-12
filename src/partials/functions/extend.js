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

    if (/^f/.test(typeof Object.assign)) {
      Object.assign.apply(Object, args);
    }
    else {
      for (i in args) {
        if (i > 0) {
          for (prop in args[i]) {
            if (args[i].hasOwnProperty(prop)) {
              base[prop] = args[i][prop];
            }
          }
        }
      }
    }
    return base;
  };

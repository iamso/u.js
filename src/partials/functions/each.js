  /**
   * each function
   * @param  {array}    array      - array to iterate over
   * @param  {function} callback - function to call on each item
   * @return {object}   this
   */
  u.each = function(array, callback) {
    for(var i in array) {
      if (array.hasOwnProperty(i)) {
        callback.call(array[i], i, array[i]);
      }
    }
    return array;
  };

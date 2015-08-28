    /**
     * each method
     * use native forEach to iterate collection
     * @param  {function} callback - function to call on each element
     * @return {object}   this
     */
    each: function(callback) {
      u.each(u.toArray(this), callback);
      return this;
    },

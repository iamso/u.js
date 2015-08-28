    /**
     * filter method
     * filter elements by selector or filter function
     * @param  {string|function} filter - selector or filter function
     * @return {object}                   matching elements
     */
    filter: function(filter) {
      return u(array.filter.call(this, function(el, index) {
        return /^f/.test(typeof filter) ? filter(index, el) : u(el).is(filter);
      }));
    },

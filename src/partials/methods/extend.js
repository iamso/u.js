    /**
     * extend method
     * extend the u.js prototype object
     * @return {object} u.js prototype
     */
    extend: function() {
      var args = u.toArray(arguments);
      args.unshift(u.fn);
      return u.extend.apply(this, args);
    },

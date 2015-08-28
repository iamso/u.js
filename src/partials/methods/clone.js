    /**
     * clone method
     * clone an element
     * @return {object} element clone
     */
    clone: function() {
      return u(this[0].cloneNode(true));
    },

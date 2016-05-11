    /**
     * clone method
     * clone an element
     * @return {object} element clone
     */
    clone: function() {
      return this.length ? u(this[0].cloneNode(true)) : this;
    },

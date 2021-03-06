    /**
     * find method
     * find a selector inside of this element
     * @param  {string} sel - selector to find
     * @return {object}       matching elements
     */
    find: function(sel) {
      return this.length ? u(u.toArray(this[0].querySelectorAll(sel))) : this;
    },

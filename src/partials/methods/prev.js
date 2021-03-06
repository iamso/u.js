    /**
     * prev method
     * get previous element sibling
     * @param  {string} [sel] - selector to filter siblings
     * @return {object}         sibling element
     */
    prev: function(sel) {
      return this.length ? u(u.toArray(this.prevAll(sel)).shift()) : this;
    },

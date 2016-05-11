    /**
     * siblings method
     * get element siblings
     * @param  {string} [sel] - selector to filter siblings
     * @return {object}         sibling elements
     */
    siblings: function(sel) {
      if (!this.length) {
        return this;
      }
      var el = this[0];
      return u(array.filter.call(el.parentNode.children, function(child) {
        return sel ? child !== el && u(child).is(sel) : child !== el;
      }));
    },

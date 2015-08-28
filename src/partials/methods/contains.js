    /**
     * contains method
     * check if child is contained in this element
     * @param  {(string|object)} child - element or css selector
     * @return {boolean}
     */
    contains: function(child) {
      return /^o/.test(typeof child) ? this[0] !== child[0] && this[0].contains(child[0]) : this[0].querySelector(child) !== null;
    },

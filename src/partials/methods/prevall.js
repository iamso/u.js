    /**
     * prevAll method
     * get all previous element siblings
     * @param  {string} [sel] - selector to filter siblings
     * @return {object}         sibling elements
     */
    prevAll: function(sel) {
      if (!this.length) {
        return this;
      }
      var matched = [],
    	 		el = this[0];

    	while (el = el.previousElementSibling) {
    		sel ?
    			(u(el).is(sel) && matched.push(el)) :
    			matched.push(el);
    	}
    	return u(matched);
    },

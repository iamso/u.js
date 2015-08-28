    /**
     * nextAll method
     * get all next element siblings
     * @param  {string} [sel] - selector to filter siblings
     * @return {object}         sibling elements
     */
    nextAll: function(sel) {
      var matched = [],
    	 		el = this[0];

    	while (el = el.nextElementSibling) {
    		sel ?
    			(u(el).is(sel) && matched.push(el)) :
    			matched.push(el);
    	}
    	return u(matched);
    },

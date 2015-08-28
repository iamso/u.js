    /**
     * index method
     * get the index of an element
     * @param  {object|string} [el] - elements or css selector
     * @return {number}               index
     */
    index: function(el) {
      if (!el) {
    		return this[0] ? this.first().prevAll().length : -1;
    	}
    	if (''+el === el) {
    		return u.toArray(u(el)).indexOf(this[0]);
    	}
      el = el.ujs ? el[0] : el;
    	return u.toArray(this).indexOf(el);
    },

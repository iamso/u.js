    /**
     * removeAttr method
     * remove an attribute
     * @param  {string} attr - attribute name
     * @return {object} this
     */
    removeAttr: function(attr) {
      return this.each(function(index, el) {
        el.removeAttribute(attr);
      });
    },

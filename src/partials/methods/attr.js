    /**
     * attr method
     * get or set an attribute
     * @param  {string}          attr  - attribute name
     * @param  {string}          [val] - attribute value
     * @return {(string|object)}         attribute value or this
     */
    attr: function(attr, val) {
      return val === undefined ? (this.length ? this[0].getAttribute(attr) : null) : this.each(function(index, el) {
        el.setAttribute(attr, val);
      });
    },

    /**
     * outerHTML method
     * get or set outerHTML value
     * @param  {string}          [val] - html value
     * @return {(string|object)}         html value or this
     */
    outerHTML: function(val) {
      return val === undefined ? (this.length ? this[0].outerHTML : null) : this.each(function(index, el) {
        el.outerHTML = val;
      });
    },

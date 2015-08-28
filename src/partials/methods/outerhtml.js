    /**
     * outerHTML method
     * get or set outerHTML value
     * @param  {string}          [val] - html value
     * @return {(string|object)}         html value or this
     */
    outerHTML: function(val) {
      return val === undefined ? this[0].outerHTML : this.each(function(index, el) {
        el.outerHTML = val;
      });
    },

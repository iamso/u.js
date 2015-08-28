    /**
     * text method
     * get or set the textContent value
     * @param  {string}          [val] - text value
     * @return {(string|object)}         text value or this
     */
    text: function(val) {
      return val === undefined ? this[0].textContent : this.each(function(index, el) {
        el.textContent = val;
      });
    },

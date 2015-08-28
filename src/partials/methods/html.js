    /**
     * html method
     * get or set innerHTML value
     * @param  {string}          [val] - html value
     * @return {(string|object)}         html value or this
     */
    html: function(val) {
      return val === undefined ? this[0].innerHTML : this.each(function(index, el) {
        el.innerHTML = val;
      });
    },

    /**
     * html method
     * get or set innerHTML value
     * @param  {string}          [val] - html value
     * @return {(string|object)}         html value or this
     */
    html: function(val) {
      return val === undefined ? (this.length ? this[0].innerHTML : null) : this.each(function(index, el) {
        el.innerHTML = val;
      });
    },

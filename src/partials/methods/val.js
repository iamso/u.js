    /**
     * val method
     * get or set the value property of inputs and textareas
     * @param  {string}          [val] - text value
     * @return {(string|object)}         text value or this
     */
    val: function(val) {
      return val === undefined ? this[0].value : this.each(function(index, el) {
        el.value = val;
      });
    },

    /**
     * prop method
     * get or set a property of the underlying DOM object
     * @param  {string}          prop  - property name
     * @param  {string}          [val] - property value
     * @return {(string|object)}         property value or this
     */
    prop: function(prop, val) {
      return val === undefined ? (this.length ? this[0][prop] : null) : this.each(function(index, el) {
        el[prop] = val;
      });
    },

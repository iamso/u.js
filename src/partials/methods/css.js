    /**
     * css method
     * get or set css properties
     * @param  {(string|object)} props - property name or object with names and values
     * @param  {string}          [val] - property value
     * @return {(string|object)}         property value or this
     */
    css: function(props, val) {
      if (/^o/.test(typeof props)) {
        for(var prop in props) {
          var prefixed = u.prfx(prop);
          if (props.hasOwnProperty(prop)) {
            this.each(function(index, el) {
              el.style[prefixed] = props[prop];
            });
          }
        }
        return this;
      }
      else {
        return val === undefined ? this[0].style[props] : this.each(function(index, el) {
          var prefixed = u.prfx(props);
          el.style[prefixed] = val;
        });
      }
    },

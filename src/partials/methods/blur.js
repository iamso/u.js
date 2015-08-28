    /**
     * blur method
     * remove focus from elements
     * @return {object} this
     */
    blur: function() {
      return this.each(function(index, el) {
        el.blur();
      });
    },

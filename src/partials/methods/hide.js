    /**
     * hide method
     * hide dom elements
     * @return {object} this
     */
    hide: function() {
      return this.each(function(index, el) {
        el.style.display = 'none';
      });
    },

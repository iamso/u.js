    /**
     * show method
     * show dom elements
     * @return {object} this
     */
    show: function() {
      return this.each(function(index, el) {
        el.style.display = '';
      });
    },

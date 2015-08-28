    /**
     * empty method
     * empty the content of elements
     * @return {object} this
     */
    empty: function() {
      return this.each(function(index, el) {
        el.innerHTML = '';
      });
    },

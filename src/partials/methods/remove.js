    /**
     * remove method
     * remove element from dom
     * @return {object} element
     */
    remove: function() {
      return this.each(function(index, el) {
        el.parentNode.removeChild(el);
      });
    },

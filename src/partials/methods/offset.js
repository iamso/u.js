    /**
     * offset method
     * get element offset
     * @return {object} offset
     */
    offset: function() {
      var rect = this[0].getBoundingClientRect();
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      };
    },

    /**
     * offset method
     * get element offset
     * @return {object} offset
     */
    offset: function() {
      if (!this.length) {
        return {
          top: 0,
          left: 0
        };
      }
      var rect = this[0].getBoundingClientRect();
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      };
    },

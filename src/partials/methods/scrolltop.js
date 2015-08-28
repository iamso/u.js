    /**
     * scrollTop method
     * get or set element scrollTop
     * @param  {number} [val]     - new scrollTop
     * @return {number} scrollTop
     */
    scrollTop: function(val) {
      return val === undefined ? this[0].scrollTop : this.each(function(index, el) {
        el.scrollTop = val;
      });
    },

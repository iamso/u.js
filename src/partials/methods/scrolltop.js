    /**
     * scrollTop method
     * get or set element scrollTop
     * @param  {number} [val]     - new scrollTop
     * @return {number} scrollTop
     */
    scrollTop: function(val) {
      return val === undefined ? (this.length ? (this[0].scrollTop !== undefined ? this[0].scrollTop : (this[0].scrollY || this[0].pageYOffset)) : 0) : this.each(function(index, el) {
        el.scrollTop === undefined || el.scrollTo !== undefined ? el.scrollTo(0, val) : el.scrollTop = val;
      });
    },

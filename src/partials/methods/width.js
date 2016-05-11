    /**
     * width method
     * get or set element width
     * @param  {number} [val] - new width
     * @return {number} width
     */
    width: function(val) {
      return val === undefined ? (this.length ? this[0].clientWidth || this[0].innerWidth : 0) : this.each(function(index, el) {
        el.style.width = val + 'px';
      });
    },

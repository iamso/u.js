    /**
     * width method
     * get or set element width
     * @param  {number} [val] - new width
     * @return {number} width
     */
    width: function(val) {
      return val === undefined ? this[0].clientWidth || this[0].innerWidth : this.each(function(index, el) {
        el.style.width = val + 'px';
      });
    },

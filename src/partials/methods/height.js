    /**
     * height method
     * get or set element height
     * @param  {number} [val]  - new height
     * @return {number} height
     */
    height: function(val) {
      return val === undefined ? this[0].clientHeight || this[0].innerHeight : this.each(function(index, el) {
        el.style.height = val + 'px';
      });
    },

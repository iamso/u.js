    /**
     * outerHeight method
     * get element outer height
     * @param  {boolean} [margin]    - if true, includes margin
     * @return {number}  outerHeight
     */
    outerHeight: function(margin) {
      if (!this.length) {
        return 0;
      }
      return margin ? this[0].offsetHeight + parseInt(getComputedStyle(this[0]).marginTop) + parseInt(getComputedStyle(this[0]).marginBottom) : this[0].offsetHeight;
    },

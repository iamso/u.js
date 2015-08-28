    /**
     * outerWidth method
     * get element outer width
     * @param  {boolean} [margin]   - if true, includes margin
     * @return {number}  outerWidth
     */
    outerWidth: function(margin) {
      return margin ? this[0].offsetWidth + parseInt(getComputedStyle(this[0]).marginLeft) + parseInt(getComputedStyle(this[0]).marginRight) : this[0].offsetWidth;
    },

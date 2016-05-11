    /**
     * position method
     * get element position
     * @return {object} position
     */
    position: function() {
      return this.length ? {left: this[0].offsetLeft, top: this[0].offsetTop} : {left: 0, top: 0};
    },

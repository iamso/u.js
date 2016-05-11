    /**
     * hasClass method
     * check if element has class
     * @param  {string}  cls - class name to check for
     * @return {boolean}
     */
    hasClass: function(cls) {
      return this.length ? this[0].classList.contains(cls) : false;
    },

    /**
     * parent method
     * get the parent element
     * @return {object} element
     */
    parent: function() {
      return this.length ? u(this[0].parentNode): this;
    },

    /**
     * focus method
     * give an element focus
     * @return {object} this
     */
    focus: function() {
      this.length && this[0].focus();
      return this;
    },

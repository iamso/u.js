    /**
     * bytes method
     * get byte size of an element's text
     * @return {number} byte size
     */
    bytes: function() {
      return this.length ? u.bytes(this[0].value || this[0].textContent) : 0;
    },

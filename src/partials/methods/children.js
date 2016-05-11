    /**
     * children method
     * get child elements
     * @return {object} child elements
     */
    children: function() {
      return this.length ? u(u.toArray(this[0].children)) : this;
    },

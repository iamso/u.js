    /**
     * prepend method
     * prepend child element(s) to this element
     * @param  {object} children - dom element(s) to be prepended
     * @return {object} this
     */
    prepend: function(children) {
      return this.each(function(index, el, first) {
        first = el.firstChild;
        children.each(function(index, child) {
          el.insertBefore(child, first);
        });
      });
    },

    /**
     * append method
     * append child element(s) to this element
     * @param  {object} children - dom element(s) to be appended
     * @return {object} this
     */
    append: function(children) {
      return this.each(function(index, el) {
        children.each(function(index, child) {
          el.appendChild(child);
        });
      });
    },

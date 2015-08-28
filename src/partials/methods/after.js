    /**
     * after method
     * insert element(s) after this element
     * @param  {object} siblings - element(s) to be inserted after this
     * @return {object} this
     */
    after: function(siblings) {
      return this.each(function(index, el) {
        siblings.each(function(index, sibling) {
          el.insertAdjacentHTML('afterend', sibling.outerHTML);
        });
      });
    },

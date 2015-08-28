    /**
     * before method
     * insert element(s) before this element
     * @param  {object} siblings - element(s) to be inserted before this
     * @return {object} this
     */
    before: function(siblings) {
      return this.each(function(index, el) {
        siblings.each(function(index, sibling) {
          el.insertAdjacentHTML('beforebegin', sibling.outerHTML);
        });
      });
    },

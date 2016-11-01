    /**
     * is method
     * matches the element against a selector
     * @param  {string}  sel - selector to match
     * @return {boolean}
     */
    is: function(sel) {
      if (!this.length) {
        return false;
      }
      var m = (this[0].matches || this[0].matchesSelector || this[0].msMatchesSelector || this[0].mozMatchesSelector || this[0].webkitMatchesSelector || this[0].oMatchesSelector || function(s) {
        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
      });
      return m.call(this[0], sel);
    },

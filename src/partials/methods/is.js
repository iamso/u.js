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
      var m = (this[0].matches || this[0].matchesSelector || this[0].msMatchesSelector || this[0].mozMatchesSelector || this[0].webkitMatchesSelector || this[0].oMatchesSelector);
      if (m) {
        return m.call(this[0], sel);
      }
      else if (this[0].parentNode) {
        var n = this[0].parentNode.querySelectorAll(sel);
        for (var i = n.length; i--;) {
          if (n[i] === this[0]) {
            return true;
          }
        }
      }
      return false;
    },

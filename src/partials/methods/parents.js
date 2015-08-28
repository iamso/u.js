    /**
     * parents method
     * get the parent elements
     * @return {object} element
     */
    parents: function(sel) {
      var parents = [],
          finished = false,
          currentElement = this[0];

      while (!finished) {
        currentElement = currentElement.parentNode;
        if (currentElement) {
          if (sel === undefined) {
            parents.push(currentElement);
          }
          else if (u(currentElement).is(sel)) {
            parents.push(currentElement);
          }
        }
        else {
          finished = true;
        }
      }
      return u(parents);
    },

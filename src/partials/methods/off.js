    /**
     * off method
     * remove event listeners from elements
     * @param  {string}   event   - event type i.e 'click'
     * @param  {function} handler - event handler function
     * @return {object}   this
     */
    off: function(event, handler) {
      return this.each(function(index, el) {
        var events = event.split(' ');
        u.each(events, function(i, event){
          el.removeEventListener(event, handler);
        });
      });
    },

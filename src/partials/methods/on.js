    /**
     * on method
     * add event listeners to elements
     * @param  {string}   event   - event type i.e 'click'
     * @param  {function} handler - event handler function
     * @return {object}   this
     */
    on: function(event, handler) {
      return this.each(function(index, el) {
        var events = event.split(' ');
        u.each(events, function(i, event){
          el.addEventListener(event, handler);
        });
      });
    },

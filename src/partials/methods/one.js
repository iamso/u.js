    /**
     * one method
     * add one time event listeners to elements
     * @param  {string}   event   - event type i.e 'click'
     * @param  {function} handler - event handler function
     * @return {object}   this
     */
    one: function(event, handler) {
      return this.each(function(index, el) {
        var events = event.split(' ');
        u.each(events, function(i, event){
          el.addEventListener(event, function temp(e) {
            el.removeEventListener(event, temp);
            handler.call(this,e);
          });
        });
      });
    },

    /**
     * off method
     * remove event listeners from elements
     * @param  {string}   event   - event type i.e 'click'
     * @param  {function} handler - event handler function
     * @return {object}   this
     */
    off: function(event, selector, handler, fn) {
      if (/^f/.test(typeof selector)) {
        handler = selector;
      }
      fn = handler;
      return this.each(function(index, el) {
        var events = event.split(' ');
        u.each(events, function(i, event){
          handler = u._events.remove(el, event, fn)[0].handler;
          el.removeEventListener(event, handler);
        });
      });
    },

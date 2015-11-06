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
        if ((index = el[u._id]) === undefined) {
          el[u._id] = index = u._data.push({}) - 1;
          u._events[index] = [];
        }
        u.each(events, function(i, event){
          handler = u._events.remove(index, event, fn)[0].handler;
          el.removeEventListener(event, handler);
        });
      });
    },

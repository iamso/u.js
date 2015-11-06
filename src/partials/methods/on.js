    /**
     * on method
     * add event listeners to elements
     * @param  {string}   event   - event type i.e 'click'
     * @param  {function} handler - event handler function
     * @return {object}   this
     */
    on: function(event, selector, handler, fn) {
      if (/^f/.test(typeof selector)) {
        handler = selector;
        fn = handler;
      }
      else if (/^s/.test(typeof selector)) {
        fn = handler;
        handler = function(e) {
          if (u(e.target).is(selector)) {
            fn.apply(e.target, [e]);
          }
        };
      }
      return this.each(function(index, el) {
        var events = event.split(' ');
        if ((index = el[u._id]) === undefined) {
          el[u._id] = index = u._data.push({}) - 1;
          u._events[index] = [];
        }
        u.each(events, function(i, event){
          u._events.add(index, event, fn, handler) &&
          el.addEventListener(event, handler);
        });
      });
    },

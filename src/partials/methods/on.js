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
          var element;
          if (u(e.target).is(selector)) {
            element = e.target;
          }
          else if (u(e.target).parents(selector).length) {
            element = u(e.target).parents(selector)[0];
          }
          if (element) {
            fn.apply(element, [e]);
          }
        };
      }
      return this.each(function(index, el) {
        var events = event.split(' ');
        u.each(events, function(i, event){
          u._events.add(el, event, fn, handler) &&
          el.addEventListener(event, handler);
        });
      });
    },

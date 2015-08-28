    /**
     * trigger method
     * trigger an event for an element
     * @param  {string} e    - event name
     * @return {object} this
     */
    trigger: function(e) {
      if (document.createEvent) {
        var event = document.createEvent('HTMLEvents');
        event.initEvent(e, true, false);
        return this.each(function(index, el) {
          el.dispatchEvent(event);
        });
      }
      else {
        return this.each(function(index, el) {
          el.fireEvent('on' + e);
        });
      }
    },

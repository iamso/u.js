    /**
     * trigger method
     * trigger an event for an element
     * @param  {string} e      - event name
     * @param  {string} [data] - custom data
     * @param  {string} evt    - placeholder for the event object
     * @return {object} this
     */
    trigger: function(e, data, evt) {
      if (/^f/.test(typeof CustomEvent)) {
        evt = new CustomEvent(e, {
          detail: data,
          bubbles: true,
          cancelable: false
        });
      }
      else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(e, true, false, data);
      }
      return this.each(function(index, el) {
        el.dispatchEvent ?
          el.dispatchEvent(evt) :
          el.fireEvent('on' + e, evt);
      });
    },

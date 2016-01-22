    /**
     * scrollTo method
     * scroll to a certain position inside the element
     * @param  {number}   position - position to scroll to
     * @param  {number}   duration - duration for the animation
     * @param  {function} callback - function to call when finished
     * @return {object}   this
     */
    scrollTo: function(position, duration, callback) {
      var el = this[0],
          _el = u(el),
          _win = u(window),
          winHeight = _win.height(),
          scrollPos = _el.scrollTop(),
          docHeight = el.scrollHeight,
          startPosition = scrollPos,
          newPosition = position,
          maxPosition = docHeight - winHeight,
          time = duration || 1500,
          timeStep = 16,
          limit = 3,
          factor = Math.pow(limit / Math.abs(startPosition - newPosition), 1 / (time / timeStep));

      cancelAnimationFrame(el.animationId);
      el.animationId = requestAnimationFrame(step);

      function step (time) {
          position = (maxPosition = docHeight - winHeight) < newPosition ? maxPosition : newPosition;
          position = position < 0 ? 0 : position;

          if ((Math.abs(scrollPos - position) > limit)) {
            el.animationId = requestAnimationFrame(step);

            scrollPos += (position - scrollPos) * (1 - factor);
            _el.scrollTop(scrollPos);
          }
          else {
            _el.scrollTop(position);
            callback && callback.apply(window);
          }
      }
      return this;
    },


    /**
     * scrollToTop method
     * shortcut for scroll to 0
     * @param  {number}   duration - duration for the animation
     * @param  {function} callback - function to call when finished
     * @return {object}   this
     */
    scrollToTop: function(duration, callback) {
      return u(this).scrollTo(0, duration, callback);
    },

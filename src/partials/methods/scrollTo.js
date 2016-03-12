    /**
     * scrollTo method
     * scroll to a certain position inside the element
     * @param  {number}   to       - position to scroll to
     * @param  {number}   duration - duration for the animation
     * @param  {function} callback - function to call when finished
     * @return {object}   this
     */
    scrollTo: function(to, duration, callback) {
      return this.each(function(index, el) {
        var _el = u(el),
            start = _el.scrollTop(),
            change = to - start,
            currentTime = 0,
            increment = 20;
        duration = duration || 1500;

        function easing(t, b, c, d) {
          t /= d/2;
          if (t < 1) {
            return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
          }
          t--;
          return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
        }

        function animateScroll() {
          currentTime += increment;
          var val = easing(currentTime, start, change, duration);
          _el.scrollTop(val);
          if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
          } else {
            callback && callback.apply(window);
          }
        }
        animateScroll();
      });
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

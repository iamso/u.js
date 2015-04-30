
(function(u,window,document) {
  'use strict';


  /**
   * overwrite class methods if classList is not defined
   */
  if (!document.body.classList) {


    /**
     * hasClass method
     * check if element has class
     * @param  {string}  cls - class name to check for
     * @return {boolean}
     */
    u.fn.hasClass = function(cls) {
      return new RegExp('(^| )' + cls + '( |$)', 'gi').test(el.className);
    };


    /**
     * addClass method
     * @param  {string} cls  - class name
     * @return {object} this
     */
    u.fn.addClass = function(cls) {
      return this.each(function(el) {
        el.className += ' ' + cls;
      });
    };


    /**
     * removeClass method
     * @param  {string} cls  - class name
     * @return {object} this
     */
    u.fn.removeClass = function(cls) {
      return this.each(function(el) {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      });
    };


    /**
     * toggleClass method
     * @param  {string} cls  - class name
     * @return {object} this
     */
    u.fn.toggleClass = function(cls) {
      return this.each(function(el) {
        var classes = el.className.split(' '),
            existingIndex = classes.indexOf(className);

        if (existingIndex >= 0) {
          classes.splice(existingIndex, 1);
        }
        else {
          classes.push(className);
        }

        el.className = classes.join(' ');
      });
    };

  }

})(u,window,document);

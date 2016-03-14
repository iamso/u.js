  /**
   * map class method names
   * @type {array}
   */
  var props = ['addClass', 'removeClass', 'toggleClass'],
      maps = ['add', 'remove', 'toggle'];


  /**
   * addClass, removeClass and toggleClass methods
   * @param  {string}  cls    - class name
   * @param  {boolean} force  - (only for toggle) if true add, if false remove class
   * @return {object}  this
   */
  u.each(props, function(index, prop) {
    u[prototype][prop] = function(cls, force) {
      return this.each(function(i, el) {
        var classes =  cls.split(' ');
        u.each(classes, function(ii, cls, args){
          args = force !== undefined ? [cls, !!force] : [cls];
          el.classList[maps[index]].apply(el.classList, args);
        });
      });
    };
  });

  /**
   * map class method names
   * @type {array}
   */
  var props = ['addClass', 'removeClass', 'toggleClass'],
      maps = ['add', 'remove', 'toggle'];


  /**
   * addClass, removeClass and toggleClass methods
   * @param  {string} cls  - class name
   * @return {object} this
   */
  u.each(props, function(index, prop) {
    u[prototype][prop] = function(cls) {
      return this.each(function(i, el) {
        var classes =  cls.split(' ');
        u.each(classes, function(ii, cls){
          el.classList[maps[index]](cls);
        });
      });
    };
  });

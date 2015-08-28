    /**
     * data method
     * get or set a data attribute
     * @param  {string}          attr    - attribute name
     * @param  {string}          [val]   - attribute value
     * @param  {undefined}       [el]    - element placeholder
     * @param  {undefined}       [index] - index placeholder
     * @param  {undefined}       [obj]   - object placeholder
     * @return {(string|object)}         attribute value or this
     */
    data: function(attr, val, el, index, obj) {

      // Shorthand Version
      //
      // return val === undefined ?
      //   (index = el[u._id]) === undefined ?
      //     u._data[el[u._id] = index = u._data.push({[attr]: this[0].getAttribute('data-' + attr)}) - 1][attr] :
      //     !!u._data[index][attr] ?
      //       u._data[index][attr] :
      //       (u._data[index][attr] = this[0].getAttribute('data-' + attr)) :
      //   this.each(function(index, el) {
      //     (index = el[u._id]) === undefined ?
      //       el[u._id] = index = u._data.push({[attr]: val}) - 1 :
      //       u._data[index][attr] = val;
      //   });

      // Normal Version
      //
      if (val === undefined) {
        el = this[0];
        if ((index = el[u._id]) === undefined) {
          obj = {};
          obj[attr] = this[0].getAttribute('data-' + attr);
          el[u._id] = index = u._data.push(obj) - 1;
          return obj[attr];
        }
        else {
          return !!u._data[index][attr] ? u._data[index][attr] : (u._data[index][attr] = this[0].getAttribute('data-' + attr));
        }
      }
      else {
        return this.each(function(index, el) {
          if ((index = el[u._id]) === undefined) {
            obj = {};
            obj[attr] = val;
            el[u._id] = index = u._data.push(obj) - 1;
          }
          else {
            u._data[index][attr] = val;
          }
        });
      }

    },

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

      if (attr === undefined) {
        if (!this.length) {
          return {};
        }
        el = this[0];
        obj = u.extend({}, el.dataset);

        if ((index = el[u._id]) === undefined) {
          el[u._id] = index = u._data.push(obj) - 1;
          return obj;
        }
        else {
          return u._data[index] = u.extend({}, obj, u._data[index]);
        }
      }
      else {
        attr = u.toCamel(u.toDash(attr));
        if (val === undefined) {
          if (!this.length) {
            return null;
          }
          el = this[0];
          if ((index = el[u._id]) === undefined) {
            obj = {};
            obj[attr] = el.dataset[attr];
            el[u._id] = index = u._data.push(obj) - 1;
            return obj[attr];
          }
          else {
            return !!u._data[index][attr] ? u._data[index][attr] : (u._data[index][attr] = el.dataset[attr]);
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
      }

    },


    /**
     * removeData method
     * remove data attribute
     * @param  {string}    attr    - attribute name
     * @param  {undefined} [index] - index placeholder
     * @return {object}            this
     */
    removeData: function(attr, index) {
      return this.each(function(i, el) {
        if (attr !== undefined) {
          attr = u.toCamel(u.toDash(attr));
          if ((index = el[u._id]) !== undefined) {
            delete el.dataset[attr];
            delete u._data[index][attr];
          }
        }
      });
    },

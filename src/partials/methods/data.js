    /**
     * data method
     * get or set a data attribute
     * @param  {string}          attr        - attribute name
     * @param  {string}          [val]       - attribute value
     * @param  {undefined}       [el]        - element placeholder
     * @param  {undefined}       [index]     - index placeholder
     * @param  {undefined}       [obj]       - object placeholder
     * @param  {undefined}       [attrCamel] - placeholder for attribute name in camelCase
     * @return {(string|object)}               attribute value or this
     */
    data: function(attr, val, el, index, obj, attrCamel) {

      if (attr === undefined) {
        if (!this.length) {
          return {};
        }
        el = this[0];
        obj = u.extend({}, el.dataset || {});

        if ((index = el[u._id]) === undefined) {
          el[u._id] = index = u._data.push(obj) - 1;
          return obj;
        }
        else {
          return u._data[index] = u.extend({}, obj, u._data[index]);
        }
      }
      else {
        attrCamel = u.toCamel(u.toDash(attr));
        if (val === undefined) {
          if (!this.length) {
            return null;
          }
          el = this[0];
          if ((index = el[u._id]) === undefined) {
            obj = {};
            obj[attrCamel] = el.dataset ? el.dataset[attrCamel] : el.getAttribute('data-' + attr);
            el[u._id] = index = u._data.push(obj) - 1;
            return obj[attrCamel];
          }
          else {
            return !!u._data[index][attrCamel] ? u._data[index][attrCamel] : (u._data[index][attrCamel] = el.dataset ? el.dataset[attrCamel] : el.getAttribute('data-' + attr));
          }
        }
        else {
          return this.each(function(index, el) {
            if ((index = el[u._id]) === undefined) {
              obj = {};
              obj[attrCamel] = val;
              el[u._id] = index = u._data.push(obj) - 1;
            }
            else {
              u._data[index][attrCamel] = val;
            }
          });
        }
      }

    },


    /**
     * removeData method
     * remove data attribute
     * @param  {string}    attr        - attribute name
     * @param  {undefined} [index]     - index placeholder
     * @param  {undefined} [attrCamel] - placeholder for attribute name in camelCase
     * @return {object}                  this
     */
    removeData: function(attr, index, attrCamel) {
      return this.each(function(i, el) {
        if (attr !== undefined) {
          attrCamel = u.toCamel(u.toDash(attr));
          if ((index = el[u._id]) !== undefined) {
            el.dataset ? delete el.dataset[attrCamel] : el.removeAttribute('data-' + attr);
            delete u._data[index][attrCamel];
          }
        }
      });
    },

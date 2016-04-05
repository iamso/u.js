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
        el = this[0];
        attr = u.toArray(el.attributes);
        obj = {};

        u.each(attr, function(i, a) {
          if (i = a.name.match(/^data\-(.*)/)) {
            obj[i[1]] = a.value;
          }
        });

        if ((index = el[u._id]) === undefined) {
          el[u._id] = index = u._data.push(obj) - 1;
          return obj;
        }
        else {
          return u._data[index] = u.extend({}, obj, u._data[index]);
        }
      }
      else {
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
      }
      
    },

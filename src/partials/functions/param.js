  /**
   * param function
   * prepare data as json or form encoded param string
   * @param  {object}  obj    - data to prepare
   * @param  {boolean} json   - true for json
   * @param  {string}  prefix - prefix for form encoded params
   * @return {string}           prepared string
   */
  u.param = function(obj, json, prefix) {
    if (json) {
      return JSON.stringify(obj);
    }
    else {
      var str = [];
      for(var p in obj) {
        var k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
        str.push(typeof v === "object" ? u.param(v, json, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
      return str.join("&");
    }
  };

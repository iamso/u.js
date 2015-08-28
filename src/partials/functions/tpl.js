  /**
   * tpl function
   * parse a template string with values
   * from https://gist.github.com/haochi/1075080
   * @param  {string} str - string containing {{variables}}
   * @param  {object} obj - object containing values
   * @return {string}       parsed string
   */
  u.tpl = function(str, obj){
    return str.replace(/{{*([^}]+)*}}/g,
      function(tmp, val){
        tmp = obj;
        val.replace(/[^.]+/g,function(key){
          tmp = tmp[key] || '';
        });
        return tmp;
      }
    );
  };

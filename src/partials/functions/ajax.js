  /**
   * ajax setup
   * @type {object}
   */
  u.ajax = {


    /**
     * ajax default options
     * @type {object}
     */
    opts: {
      sync: true,
      json: true, // true to send as json
      auth: null,
      success: function() {},
      error: function() {},
      up: function() {},
      down: function() {}
    },


    /**
     * ajax content types
     * @type {object}
     */
    cts: {
      form: 'application/x-www-form-urlencoded',
      json: 'application/json'
    },


    /**
     * ajax send function (internal use)
     * @param  {object} opts   - ajax options
     * @param  {string} method - http method
     * @return {object} xhr    - xhr object
     */
    _send: function(opts, method) {

      // create function vars
      var cts = this.cts,
          xhr = new XMLHttpRequest(),
          data = u.param(opts.data, opts.json);

      // XMLHttpRequest state change function
      xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 400){
            // call success callback
            opts.success(u.parse(xhr.response || xhr.responseText), xhr.statusText);
          }
          else {
            // call error callback
            opts.error(u.parse(xhr.response || xhr.responseText), xhr.statusText);
          }
        }
      };

      if (xhr.upload) {
        // XMLHttpRequest upload progress function
        xhr.upload.onprogress = function(event) {
          if (event.lengthComputable) {
            // call progress callback
            opts.up(event.total, event.loaded);
          }
        };
      }

      // XMLHttpRequest download progress function
      xhr.onprogress = function(event) {
        if (event.lengthComputable) {
          // call progress callback
          opts.down(event.total, event.loaded);
        }
      };

      // open request and set headers
      xhr.open(method, opts.url, opts.sync);
      xhr.setRequestHeader('Content-type', (opts.json ? cts.json : cts.form));
      xhr.setRequestHeader('Accept', cts.json);

      opts.headers && u.each(opts.headers, function(header, value) {
        xhr.setRequestHeader(header, value);
      });

      // if set, send authorization header
      if (opts.auth) {
        xhr.setRequestHeader('Authorization', opts.auth);
      }

      // send the request
      xhr.send(data || null);

      return xhr;

    },


    /**
     * set ajax defaults
     * @param  {object}    opts - new defaults
     * @return {undefined}
     */
    defaults: function(opts) {
      this.opts = u.extend({}, this.opts, opts);
    }
  };


  /**
   * get function
   * shortcut for ajx GET request
   * @param  {object} opts - ajax options
   * @return {object} xhr  - xhr object
   */
  u.get = function(opts) {
    opts = u.extend({}, u.ajax.opts, opts);
    opts.json = false;
    opts.url += '?' + (u.param(opts.data) || '');
    return u.ajax._send(opts, 'GET');
  };


  /**
   * post, put, patch, options, delete functions
   * shortcut for ajax POST, PUT, PATCH, OPTIONS and DELETE request
   * @param  {object} opts - ajax options
   * @return {object} xhr  - xhr object
   */
  var methods = ['post', 'put', 'patch', 'options', 'delete'];
  u.each(methods, function(index, method) {
    u[method] = function(opts) {
      opts = u.extend({}, u.ajax.opts, opts);
      return u.ajax._send(opts, method.toUpperCase());
    };
  });

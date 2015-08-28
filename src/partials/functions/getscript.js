  /**
   * getScript Function
   * load a script into global scope
   * @param  {[type]}   url      [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  u.getScript = function(url, callback) {
		var script = document.createElement('script');

		script.onload = callback || function(){};
		script.src = url;
    document.head.appendChild(script).parentNode.removeChild(script);
	};

  /**
   * getScript Function
   * load a script into global scope
   * @param  {string}   url      - url of the script to load
   * @param  {function} callback - function to call when loaded
   */
  u.getScript = function(url, callback) {
		var script = document.createElement('script');

		script.onload = callback || function(){};
		script.src = url;
    document.head.appendChild(script).parentNode.removeChild(script);
	};

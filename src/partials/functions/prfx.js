  /**
   * prfx function
   * get prefixed version of css properties
   * @param  {string}    a     - css property
   * @param  {undefined} b,c,d - placeholder variables
   * @return {string}            prefixed css property
   */
  u.prfx = function prfx(a,b,c,d){
    for (d?d=b.toUpperCase():b=4;!d&&b--;d=(d=d.replace(/-(.)/g,prfx)) in (new Image).style&&d) {
      d=[['Moz-','Webkit-','Ms-','O-'][b]]+a;
    }
    return d || a;
  },

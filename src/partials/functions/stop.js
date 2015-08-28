  /**
   * stop function
   * preventDefault
   * @param  {object} e - event
   * @return {object} e - event
   */
  u.stop = function(e) {
    if (!e.preventDefault) {
      e.returnValue = false;
    } else {
      e.preventDefault();
    }
    return e;
  };

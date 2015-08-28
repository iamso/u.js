  /**
   * u version
   * @type {string}
   */
  u.version = '{{version}}';


  /**
   * u _defInit
   * list of deferred intializer functions
   * will be called in the given order on DOMContentLoaded and emptied afterwards
   * @type {array}
   */
  u._defInit = [];


  /**
   * u session id
   * @type {string}
   */
  u._id = u.uuid();


  /**
   * data object
   * @type {array}
   */
  u._data = [];


  /**
   * if $ is not used assign u to it
   * @type {object}
   */
  window.$ = window.$ || u;


  /**
   * assign u to µ and ujs
   * @type {object}
   */
  window.µ = window.ujs = u;

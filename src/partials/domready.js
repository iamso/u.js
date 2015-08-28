  /**
   * DOMContentLoaded function calls
   * call functions registered with u(func)
   */
  u(document).on('DOMContentLoaded', function (e) {
    for (var i in u._defInit) {
      u._defInit[i](e);
    }
    u._defInit = [];
  });

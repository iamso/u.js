module.exports = function(grunt) {

  // measures the time each task takes
  require('time-grunt')(grunt);

  // load grunt config
  require('load-grunt-config')(grunt, {
    config: {
      banner: '/*!\n' +
              ' * <%= package.name %> - Version <%= package.version %>\n' +
              ' * <%= package.description %>\n' +
              ' * Author: <%= package.author.name %> <<%= package.author.email %>>\n' +
              ' * Build date: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>\n' +
              ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= package.author.name %>\n' +
              ' * Released under the <%= package.license %> license\n' +
              ' */',
      bannerIE: '/*!\n' +
                ' * <%= package.name %> - Version <%= package.version %> - IE 9 fix\n' +
                ' * Fix for the missing classList in IE 9\n' +
                ' * Author: <%= package.author.name %> <<%= package.author.email %>>\n' +
                ' * Build date: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>\n' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= package.author.name %>\n' +
                ' * Released under the <%= package.license %> license\n' +
                ' */'
    }
  });
};

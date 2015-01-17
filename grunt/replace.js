module.exports = {
  version: {
    src: ['dist/*.js'],             // source files array (supports minimatch)
    dest: 'dist/',
    replacements: [{
      from: '{{version}}',                   // string replacement
      to: '<%= package.version %>'
    }]
  }
};

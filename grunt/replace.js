module.exports = {
  src: {
    src: ['src/*.js'],             // source files array (supports minimatch)
    dest: 'src/',
    replacements: [{
      from: '{{version}}',                   // string replacement
      to: '<%= package.version %>'
    }]
  },
  dist: {
    src: ['dist/*.js'],             // source files array (supports minimatch)
    dest: 'dist/',
    replacements: [{
      from: '{{version}}',                   // string replacement
      to: '<%= package.version %>'
    }]
  }
};

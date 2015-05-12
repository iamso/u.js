module.exports = {
  options: {
    mangle: {
      except: ['u', 'µ']
    },
    compress: {
      drop_console: true
    },
    preserveComments: false,
    sourceMap: true
  },
  dist: {
    options: {
      banner: '<%= banner %>'
    },
    src: ['dist/u.js'],
    dest: 'dist/u.min.js'
  },
  ie9: {
    options: {
      banner: '<%= bannerIE %>'
    },
    src: ['dist/u.ie9.js'],
    dest: 'dist/u.ie9.min.js'
  },
  packed: {
    options: {
      banner: '<%= bannerIEpack %>'
    },
    src: ['dist/u.packed.js'],
    dest: 'dist/u.packed.min.js'
  }
};

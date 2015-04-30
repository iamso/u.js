module.exports = {
  options: {
    mangle: {
      except: ['µ']
    },
    compress: {
      drop_console: true
    },
    preserveComments: false,
    sourceMap: true,
    banner: '<%= banner %>'
  },
  dist: {
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
    src: ['dist/u.packed.js'],
    dest: 'dist/u.packed.min.js'
  }
};

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
  }
};

module.exports = {
  options: {
    separator: '\n\n',
    stripBanners: {
      block: false,
      line: false
    },
    banner: '<%= banner %>',
  },
  dist: {
    src: ['src/u.js'],
    dest: 'dist/u.js'
  },
  ie9: {
    options: {
      banner: '<%= bannerIE %>'
    },
    src: ['src/u.ie9.js'],
    dest: 'dist/u.ie9.js'
  },
  packed: {
    options: {
      banner: ''
    },
    src: ['dist/u.js', 'dist/u.ie9.js'],
    dest: 'dist/u.packed.js'
  }
};

module.exports = {
  options: {
    separator: ';',
    stripBanners: {
      block: true,
      line: true
    },
    banner: '<%= banner %>',
  },
  dist: {
    src: ['src/u.js'],
    dest: 'dist/u.js'
  }
};

module.exports = {
  options: {
    src: './package.json',
    indent: '  '
  },
  bower: {
    src: 'package.json',    // where to read from
    dest: 'bower.json',     // where to write to
    // the fields to update, as a String Grouping
    //fields: 'name version description repository'
    fields: {
      'name': 'name',
      'version': 'version',
      'description': 'description',
      'repository': 'repository'
    }
  }
};

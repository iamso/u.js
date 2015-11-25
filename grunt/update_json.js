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
      'version': 'version',
      'description': 'description',
      'repository': 'repository',
      'keywords': 'keywords',
      'main': 'main'
    }
  },
  component: {
    src: 'package.json',    // where to read from
    dest: 'component.json',     // where to write to
    // the fields to update, as a String Grouping
    //fields: 'name version description repository'
    fields: {
      'version': 'version',
      'description': 'description',
      'keywords': 'keywords'
    }
  }
};

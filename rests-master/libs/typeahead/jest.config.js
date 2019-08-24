module.exports = {
  name: 'typeahead',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/typeahead',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

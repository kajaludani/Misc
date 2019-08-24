module.exports = {
  name: 'library1',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/library1',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

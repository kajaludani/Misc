module.exports = {
  name: 'lib2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/lib2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

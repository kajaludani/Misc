module.exports = {
  name: 'resto',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/resto',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

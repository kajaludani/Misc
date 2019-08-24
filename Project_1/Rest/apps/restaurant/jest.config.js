module.exports = {
  name: 'restaurant',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/restaurant',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

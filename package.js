Package.describe({
  name: 'yauh:geojsonlib',
  version: '0.0.9',
  summary: 'A wrapper for the npm module geojson.lib',
  git: 'https://github.com/yauh/geojsonlib',
  documentation: 'README.md'
});

Npm.depends({
  'geojson.lib': '0.0.9'
});

Package.onUse(function(api) {
  api.export('GeoLib');
  api.versionsFrom('1.1.0.2');
  api.addFiles(['geojsonlib.js'],'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yauh:geojsonlib');
  api.addFiles(['geojsonlib-tests.js'],'server');
});

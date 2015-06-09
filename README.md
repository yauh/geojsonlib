# yauh:geojsonlib
A wrapper for [geojson.lib](https://www.npmjs.com/package/geojson.lib), which wraps a set of GeoJSON tools into one single library and adds also a few tool methods

## Usage
Install the package via command line:

```
$ meteor add yauh:geojsonlib
```

The package introduces a new global called `GeoLib` which knows three main methods:

* `tools`
* `parser`
* `hash`

Each method offers one or more tools:

*   [geojson-js-utils](https://github.com/maxogden/geojson-js-utils) (_tools_): JavaScript helper functions for manipulating GeoJSON
*   [geojson-precision](https://github.com/jczaplew/geojson-precision) (_tools_): Remove meaningless precision from your GeoJSON ([one post on the topic](http://gis.stackexchange.com/questions/8650/how-to-measure-the-accuracy-of-latitude-and-longitude/8674#8674)).
*   [geojson-equality](https://github.com/geosquare/geojson-equality) (_tools_): Check two valid geojson geometries for equality.
*   [geojson-flatten](https://github.com/mapbox/geojson-flatten) (_tools_): Flatten MultiPoint, MultiPolygon, MultiLineString, and GeometryCollection geometries in GeoJSON files into simple non-complex geometries.
*   [togeojson](https://github.com/mapbox/togeojson) (_parser_): convert KML and GPX to GeoJSON, without the fuss
*   [terraformer-wkt-parser](https://github.com/Esri/terraformer-wkt-parser) (_parser_): A bare-bones WKT parser.
*   [ngeohash](https://github.com/sunng87/node-geohash) (_hash_): geohash library for nodejs.
   
**Note** `GeoLib` is only available on the server, not on the client!

## API overview

`GeoLib.tools` functions

* `lineStringsIntersect`
* `pointInBoundingBox`
* `pointInPolygon`
* `pointInMultiPolygon`
* `numberToRadius`
* `numberToDegree`
* `drawCircle`
* `rectangleCentroid`
* `pointDistance`
* `geometryWithinRadius`
* `area`
* `centroid`
* `simplify`
* `destinationPoint`
* `compare`
* `flatten`
* `precision`
* `validatePosition`
* `bboxToResolution`
* `bboxToPolygon`
* `extendBBoxWithPosition`
* `getBBoxFromVertices`
* `getBBoxCenter`
* `getPosition`
* `destinationPosition`
* `numberToBearing`
* `bearingTo`
* `rhumbBearingTo`
* `getPoint`
* `getLineString`
* `getPolygon`

`GeoLib.parser` functions

* `kml`
* `gpx`
* `wkt`

`GeoLib.hash` functions

* `encode`
* `encode_uint64`
* `encode_int`
* `decode`
* `decode_int`
* `decode_uint64`
* `decode_bbox`
* `decode_bbox_uint64`
* `decode_bbox_int`
* `neighbor`
* `neighbor_int`
* `neighbors`
* `neighbors_int`
* `bboxes`
* `bboxes_int`

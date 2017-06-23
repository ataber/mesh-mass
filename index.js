var vec3 = require('gl-vec3');

module.exports = function(cells, positions) {
  var volume = 0.0;
  var area = 0.0;

  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
    var s1 = vec3.subtract([], positions[cell[1]], positions[cell[0]]);
    var s2 = vec3.subtract([], positions[cell[2]], positions[cell[0]]);
    var wnormal = vec3.scale([], vec3.cross([], s1, s2), 0.5);
    area += vec3.length(wnormal);
    var centroid = cell.map(function(index, i) {
      return positions[index];
    }).reduce(function(a, b) {
      return vec3.add([], a, b);
    }, [0, 0, 0])
    console.log(centroid)
    vec3.scale(centroid, centroid, 1 / 3.0);
    centroid[0] = 0;
    centroid[1] = 0;
    volume += vec3.dot(centroid, wnormal);
  }

  return {
    area: area,
    volume: volume
  };
}

# mesh-mass

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Calculates mesh mass and area. Note that the volume does not make sense if the mesh does not represent a solid.

Implementation comes from [this paper](http://chenlab.ece.cornell.edu/Publication/Cha/icip01_Cha.pdf)

## Usage

[![NPM](https://nodei.co/npm/mesh-mass.png)](https://www.npmjs.com/package/mesh-mass)

```javascript
var mass = require("./index");
var bunny = require("bunny");

var massProperties = mass(bunny.cells, bunny.positions);
console.log(massProperties);
```

`require("mesh-mass")(cells, positions)`
----------------------------------------------------
Returns an object with properties `area` and `volume`.

## Contributing

See [stackgl/contributing](https://github.com/stackgl/contributing) for details.

## License

MIT. See [LICENSE.md](http://github.com/ataber/mesh-mass/blob/master/LICENSE.md) for details.

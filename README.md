bicimad
=========

Node package that returns the list of BiciMad stations.

## Installation

  `yarn add bicimad`

  or

  `npm install bicimad`

## Usage

```javascript
let BiciMad = require('bicimad');

BiciMad.get().then(result =>
  console.log(result)
);

```

That should return something like this:

```javascript
{
  code: '0',
  description: 'ok',
  whoAmI: 'BiciMad',
  version: '3.0.0 (posBiciMad)',
  time: '06-02-2021 16:09:41.023',
  data: {
    stations: [
      [Object], [Object], [Object], [Object], [Object], [Object],
      ... 164 more items
    ]
  }
}
```

Each station has this format: 

```javascript
{
  id: 1,
  latitude: '40.4172137',
  longitude: '-3.7018341',
  name: 'Puerta del Sol A',
  light: 2,
  number: '1a',
  address: 'Puerta del Sol nº 1',
  activate: 1,
  no_available: 0,
  total_bases: 30,
  dock_bikes: 20,
  free_bases: 10,
  reservations_count: 0
}
```

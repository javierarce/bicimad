
bicimad
=========

Node package that returns the list of BiciMad stations.

## Installation

  `yarn add bicimad`

  or

  `npm install bicimad`

## Usage

```javascript
let Bicimad = require('bicimad');

Bicimad.get().then(result =>
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
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      ... 164 more items
    ]
  }
}
```

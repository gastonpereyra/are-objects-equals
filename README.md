# are-objects-equal

## Code Quality Status
![Build Status](https://github.com/gastonpereyra/are-objects-equals/workflows/Build%20Status/badge.svg)
[![Coverage Status](https://img.shields.io/coveralls/github/gastonpereyra/are-objects-equals/master.svg)](https://coveralls.io/r/gastonpereyra/are-objects-equals?branch=master)

![npm-are-objects-equals](https://user-images.githubusercontent.com/39351850/93023968-0f2c1400-f5c9-11ea-8e4c-c567dee98b44.png)

## Description
A Function to compare and normalize objects easier

## Installation

```
npm i are-objects-equal
```

## Parmas

`areObjectsEqual(objectBase, objectToCompare, options)`

### objectBase and objectToCompare

* Items to compare
* Type: `Object` 
* Required

Example

```js
{
    name: "Juan Román",
    lastname: "Riquelme",
    clubs: ["Boca", "Barcelona", "Villareal", "Argentinos"],
    number: 10,
    stillPlaying: false,
    birthPlace: { country: "Argentina", province: "Buenos Aires", city: "Don Torcuato" }
}
```

### options

* Options to normalize the objects before compare
* Type: `Object`
* Optional 

Example

```js
{
    fieldsToKeep: ["name", "number"]
}
```

:link: See more in [Object Normalize](https://github.com/gastonpereyra/objects-normalizer#options)


## Usage

### areObjectsEqual(objectBase, objectToCompare)

Will compare the 2 objects without any formatting

```js
const areObjectsEqual = require('are-objects-equals');

const playerSample1 = {
    name: "Juan Román",
    lastname: "Riquelme",
    clubs: ["Boca", "Barcelona", "Villareal", "Argentinos"],
    number: 10,
    stillPlaying: false,
    birthPlace: { country: "Argentina", province: "Buenos Aires", city: "Don Torcuato" }
};

const playerSample2 = {
    name: "Juan Román",
    lastname: "Riquelme",
    clubs: ["Boca", "Barcelona", "Villareal", "Argentinos"],
    number: 10
}

areObjectsEqual(playerSample1, playerSample2);

/*
output: false
*/

areObjectsEqual(playerSample1, playerSample1);

/*
output: true
*/
```

### areObjectsEqual(objectBase, objectToCompare, options)

Will compare objects after normalize them

```js
const areObjectsEqual = require('are-objects-equals');

const playerSample1 = {
    name: "Juan Román",
    lastname: "Riquelme",
    clubs: ["Boca", "Barcelona", "Villareal", "Argentinos"],
    number: 10,
    stillPlaying: false,
    birthPlace: { country: "Argentina", province: "Buenos Aires", city: "Don Torcuato" }
};

const playerSample2 = {
    name: "Juan Román",
    lastname: "Riquelme",
    clubs: ["Boca", "Barcelona", "Villareal", "Argentinos"],
    number: 10
}

areObjectsEqual(playerSample1, playerSample2, { fieldsToKeep: ["name", "lastname", "clubs", "number"]});

/*
output: true
*/

const playerSample3 = {
    name: "Lionel",
    lastname: "Messi",
    clubs: ["Barcelona"],
    number: 10,
    stillPlaying: true
}

areObjectsEqual(playerSample1, playerSample3, { fieldsToRemove: ["name", "lastname", "clubs", "stillPlaying"]});

/*
output: true
*/
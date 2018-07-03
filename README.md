# tagged

[![Version Badge][version-image]][project-url]
[![Build Status][build-image]][build-url]
[![Dependencies][dependencies-image]][project-url]
[![License][license-image]][license-url]
[![File Size][file-size-image]][project-url]

> A tiny utility function for creating tagged template literals.

## Installation

Download the [development](http://github.com/ryanmorr/tagged/raw/master/dist/tagged.js) or [minified](http://github.com/ryanmorr/tagged/raw/master/dist/tagged.min.js) version, or install it via NPM:

``` sh
npm install ryanmorr/tagged
```

## Usage

Call `tagged` with a function to handle the resulting template string:

``` javascript
const fn = tagged((str) => str + ' bar');

fn`foo`; //=> "foo bar"
```

Optionally provide a second function to mutate values passed to the tagged template:

``` javascript
const fn = tagged((str) => str, (val) => val.toLocaleDateString());

fn`The date is ${new Date()}`; //=> "The date is 07/06/2018"
```

## Examples

Log to the console:

``` javascript
const log = tagged((msg) => console.log(msg));

log`This is an imporant message`;
```

Throw an error:

``` javascript
const error = tagged((msg) => {
    throw new Error(msg);
});

const code = 404;
const msg = 'Not found';

error`Network error: ${code} ${msg}`;
```

Parse an HTML string into a document fragment:

``` javascript
const toDOM = tagged((html) => {
    const template = document.createElement('template');
    template.innerHTML = html;
    return document.importNode(template.content, true);
});

const title = '<h1>Hello World</h1>';

const frag = toDOM`<div>${title}</div>`;
```

Compose regular expressions:

``` javascript
const regex = tagged((source) => new RegExp(source), (val) => val.source);

const yearRe = /([0-9]{4})/;
const monthRe = /([0-9]{2})/;
const dayRe = /([0-9]{2})/;
const dateRe = regex`^${yearRe}-${monthRe}-${dayRe}$`;

dateRe.test('2018-01-10'); //=> true
```

Encode parameters for a URI string:

``` javascript
const uri = tagged((str) => str, encodeURIComponent);

const genre = 'rock & roll';
const artist = 'led zeppelin';

uri`/genre/${genre}/artist/${artist}`); //=> "/genre/rock%20%26%20roll/artist/led%20zeppelin"
```

Stringify objects within a string to save them to the server or local storage:

``` javascript
const save = tagged((str) => localStorage.setItem('data', str), JSON.stringify);

const data = {
    foo: 1,
    bar: 2,
    baz: [true, false]
};

save`${data}`;
```

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).

[project-url]: https://github.com/ryanmorr/tagged
[version-image]: https://badge.fury.io/gh/ryanmorr%2Ftagged.svg
[build-url]: https://travis-ci.org/ryanmorr/tagged
[build-image]: https://travis-ci.org/ryanmorr/tagged.svg
[dependencies-image]: https://david-dm.org/ryanmorr/tagged.svg
[license-image]: https://img.shields.io/badge/license-Unlicense-blue.svg
[license-url]: UNLICENSE
[file-size-image]: https://badge-size.herokuapp.com/ryanmorr/tagged/master/dist/tagged.min.js.svg?color=blue&label=file%20size
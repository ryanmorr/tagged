# tagged

[![Version Badge][version-image]][project-url]
[![License][license-image]][license-url]
[![Build Status][build-image]][build-url]

> A tiny utility function for creating tagged template literals.

## Install

Download the [CJS](https://github.com/ryanmorr/tagged/raw/master/dist/cjs/tagged.js), [ESM](https://github.com/ryanmorr/tagged/raw/master/dist/esm/tagged.js), [UMD](https://github.com/ryanmorr/tagged/raw/master/dist/umd/tagged.js) versions or install via NPM:

``` sh
npm install @ryanmorr/tagged
```

## Usage

Invoke with a function to handle the resulting template string:

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

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).

[project-url]: https://github.com/ryanmorr/tagged
[version-image]: https://img.shields.io/github/package-json/v/ryanmorr/tagged?color=blue&style=flat-square
[build-url]: https://github.com/ryanmorr/tagged/actions
[build-image]: https://img.shields.io/github/actions/workflow/status/ryanmorr/tagged/node.js.yml?style=flat-square
[license-image]: https://img.shields.io/github/license/ryanmorr/tagged?color=blue&style=flat-square
[license-url]: UNLICENSE
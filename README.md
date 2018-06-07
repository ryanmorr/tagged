# tagged

> A tiny utility function for creating tagged template literals.

## Usage



## Examples

Create a tagged template to log to the console:

``` javascript
const log = tagged((msg) => console.log(msg));
log`Log to the console`;
```

Create a tagged template to throw an error:

``` javascript
const error = tagged((msg) => {
    throw new Error(msg);
});
error`Network error`;
```

Create a tagged template to parse an HTML string into a document fragment:

``` javascript
const toDOM = tagged((html) => {
    const template = document.createElement('template');
    template.innerHTML = html;
    return document.importNode(template.content, true);
});

const title = '<h1>Hello World</h1>';
const frag = toDOM`<div>${title}</div>`;
```


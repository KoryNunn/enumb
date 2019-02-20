# enumb

enums but with numbered keys

## Usage

```js
var options = enumb([
    'Foo',
    'Bar'
]);

options.Foo; // -> Option 'foo'

enumb.valueFor(options, 0) === options.Foo; true

enumb.keyFor(options, options.Foo) === 0; true
```
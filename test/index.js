var test = require('tape');
var enumb = require('../');

test('array of strings', function(t){
    t.plan(3);
    var options = enumb([
        'Foo',
        'Bar'
    ]);

    t.ok(options.Foo);
    t.equal(enumb.valueFor(options, 0), options.Foo);
    t.equal(enumb.keyFor(options, options.Foo), 0);
});

test('bad initial value', function(t){
    t.plan(1);

    t.throws(function(){
        enumb({ '0': 'Foo' });
    });
});
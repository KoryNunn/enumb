var KeyFor = Symbol('keyFor');
var ValueFor = Symbol('valueFor');

function Option(value){
    this.value = value;
}

module.exports = function(values){
    if(!Array.isArray(values)){
        throw new Error('Enumb takes an array of strings as its only argument');
    }

    var keyMap = new Map();
    var valueMap = new Map();
    var symbolMap = {
        [KeyFor]: option => keyMap.get(option),
        [ValueFor]: key => valueMap.get(key)
    };

    values.forEach(function(value, key){
        symbolMap[value] = new Option(value);
        keyMap.set(symbolMap[value], key);
        valueMap.set(key, symbolMap[value]);
    });

    return symbolMap;
}

module.exports.keyFor = function(enums, option){
    return enums[KeyFor](option);
};

module.exports.valueFor = function(enums, key){
    return enums[ValueFor](key);
};
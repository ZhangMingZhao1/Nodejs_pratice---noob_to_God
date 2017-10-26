var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter()

//addListener

life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 1');
})
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 2');
})
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 3');
})
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 4');
})
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 5');
})
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 6');
})
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 7');
})
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 8');
})
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 9');
})
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 10');
})
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 11');
})

life.emit('求安慰', '汉子')

document.writeln("Hello world !");

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}

var add = function(x,y) {
    return x + y;
}

var res = add(3, 4);

console.log(res);
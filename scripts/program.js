document.writeln("Hello world !");

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () { };
        F.prototype = o;
        return new F();
    };
}

var add = function (x, y) {
    return x + y;
}

var res = add(3, 4);

console.log(res);

// Define a function that sets a DOM node's color
// to yellow and then fades it to white.
var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16); node.style.backgroundColor = '#FFFF' + hex + hex; if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};

fade(document.body);

/*
getElement('myBoxDiv').
         move(350, 150).
         width(100).
         height(100).
         color('red').
         border('10px outset').
         padding('4px').
         appendText("Please stand by").
         on('mousedown', function (m) {
             this.startDrag(m, this.getNinth(m));
        }).
        on('mousemove', 'drag'). on('mouseup', 'stopDrag'). later(2000, function () {
             this.
                 color('yellow').
                 setHTML("What hath God wraught?").
                 slide(400, 40, 200, 200);
         }).
         tip('This box is resizeable');
*/
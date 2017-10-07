/**
 * Created by Milad on 7/16/2017.
 */
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var x, y;

rl.on('line', function (line) {

        var tmp = line.split(' ');
        x = parseInt(tmp[0]);
        y = parseInt(tmp[1]);
        var z = x + y;
        console.log(z);
    }
)

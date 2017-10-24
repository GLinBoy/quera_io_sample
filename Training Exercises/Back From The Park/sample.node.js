/**
 * Created by Milad on 7/16/2017.
 */
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var cnt = 0;
var x, y, x1, y1;

rl.on('line', function (line) {

        if (cnt == 0) {
            var tmp = line.split(' ');
            x = parseInt(tmp[0]);
            y = parseInt(tmp[1]);
            cnt++;
        }
        else if (cnt == 1) {
            var tmp = line.split(' ');
            x1 = parseInt(tmp[0]);
            y1 = parseInt(tmp[1]);
            if (x1 < x) {
                console.log("Left");
            }
            else {
                console.log("Right");
            }
        }
    }
)


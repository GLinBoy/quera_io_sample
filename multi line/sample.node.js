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
var n, sum = 0;

rl.on('line', function (line) {
        if (cnt == 0) {
            n = parseInt(line);
            cnt++;
        }
        else {
            var tmp = line.split(' ');
            for (var i = 0 ; i < n ; i++)
            {
                sum += parseInt(tmp[i]);
            }
            console.log(sum);
        }
    }
)

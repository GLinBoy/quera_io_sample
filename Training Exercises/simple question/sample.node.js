var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line){
    var x = parseInt(line);
    for (var i = 1 ; i <= line ; i++){
        console.log("man khoshghlab hastam")
    }
})

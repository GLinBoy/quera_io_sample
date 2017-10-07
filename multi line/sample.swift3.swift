//swift 3.0.21
let n = Int(readLine()!)!
let line = readLine()!
let values = line._split(separator: " ");
var sum = 0;
for i in 0...n - 1{
    var x = Int(values[i])!;
    sum += x;
}
print(sum);

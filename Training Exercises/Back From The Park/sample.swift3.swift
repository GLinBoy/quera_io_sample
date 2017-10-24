//swift 3.0.21
let line1 = readLine()!
let values1 = line1._split(separator: " ");
let line2 = readLine()!
let values2 = line2._split(separator: " ");

let x = Int(values1[0])!;
let y = Int(values1[1])!;
let x1 = Int(values2[0])!;
let y1 = Int(values2[1])!;


if x1 < x {
    print("Left")
} 
else{
	print("Right")
}

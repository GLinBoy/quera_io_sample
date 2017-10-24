@a = split' ', <STDIN>;
@b = split' ', <STDIN>;

$x = $a[0];
$y = $a[1];
$x1 = $b[0];
$y1 = $b[1];

if ($x < $x1){
	print("Right\n");
}
else{
	print("Left\n");
}

<?php
    $stdin = fopen('php://stdin', 'r');
	$stdout = fopen('php://stdout', 'w');
	
	$line_1 = fgets($stdin);
	$first = explode(' ', $line_1);
	$line_2 = fgets($stdin);
	$second = explode(' ', $line_2);

	if ($second[0] > $first[0])
		fwrite($stdout, "Right");
	else fwrite($stdout, "Left");

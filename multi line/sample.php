<?php
$stdin = fopen('php://stdin', 'r');
$stdout = fopen('php://stdout', 'w');
$count = fgets($stdin);
$input_line = fgets($stdin);
$numbers = explode(' ', $input_line);
$answer = 0;
for ($i = 0; $i < $count; $i++)
	$answer += $numbers[$i];
fwrite($stdout, $answer);

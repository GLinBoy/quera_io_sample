<?php
$stdin = fopen('php://stdin', 'r');
$stdout = fopen('php://stdout', 'w');
$input_line = fgets($stdin);
$numbers = explode(' ', $input_line);
fwrite($stdout, $numbers[0] + $numbers[1]);

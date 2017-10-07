<?php
$stdin = fopen('php://stdin', 'r');
$stdout = fopen('php://stdout', 'w');
$count = fgets($stdin);
for ($i = 0; $i < $count; $i++)
	fwrite($stdout, "man khoshghlab hastam\n");

<?php

date_default_timezone_set('Asia/Tokyo');

$use_turbo = true;
$sleep_interval = 0;

sleep($sleep_interval);

$dbh = new PDO('mysql:host=db;dbname=email', 'root', 'password');

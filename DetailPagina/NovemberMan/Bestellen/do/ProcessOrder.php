<?php
$ResVerCode = base64_encode((openssl_random_pseudo_bytes("3")));
$price = filter_INPUT(INPUT_GET,'FormPrice');
$DateAndTime = filter_INPUT(INPUT_GET,'DateAndTime');
$film = filter_INPUT(INPUT_GET,'Film');
$link = "../Success/index.php?ResCode=".$ResVerCode."&Film=".$film."&DateAndTime=".$DateAndTime;
header('location:'.$link);
?>

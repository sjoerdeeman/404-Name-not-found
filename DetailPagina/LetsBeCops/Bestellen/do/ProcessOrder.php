<?php
$ResVerCode = base64_encode((openssl_random_pseudo_bytes("8")));
$price = filter_INPUT(INPUT_GET,'FormPrice');
$film = filter_INPUT(INPUT_GET,'Film');
$link = "../Success/index.php?ResCode=".$ResVerCode."&Film=".$film;
header('location:'.$link);
?>

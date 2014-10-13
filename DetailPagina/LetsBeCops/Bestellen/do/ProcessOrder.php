<?php
$ResVerCode = base64_encode((openssl_random_pseudo_bytes("8")));
$price = filter_INPUT(INPUT_GET,'FormPrice');
$link = "Success/index.php?ResCode=".$ResVerCode;
header('location:'.$link);
?>

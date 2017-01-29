<?php

$ch = curl_init('https://ipinvestigator.expeditedaddons.com/?api_key=' . getenv('IPINVESTIGATOR_API_KEY') . '&ip=68.10.149.45');

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
?>

<? //phpinfo() ?>

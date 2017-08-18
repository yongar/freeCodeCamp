<?php
use KeenIO\Client\KeenIOClient;

$client = KeenIOClient::factory([
  'projectId' => '59971e80c9e77c000149edf9',
  'writeKey' => '33FD1AEFFA135D8DDA3E4618916500E2152A70F75B4457889210FFB5E26159EE7120E57AB9F22F8DAB5901E33D9CE4380DDD76215F5A96CCA865BB0667F282B71891EE1FF2E6146FAAA8CF0AA1A93F23BB77BE2EBDA0C4A9D741E97DDB0A8BBF'
]);

$event = ['purchase' => ['item' => 'Golden Elephant']];
$client->addEvent('purchases', $event);
?>
<header>
<meta http-equiv="refresh" content="0; url=https://www.yongchoi.com/project/bootstrap/index.html">
</header>
<body>
click <A href="url=https://www.yongchoi.com/project/bootstrap/index.html">here</A> to go to the updated page
</body>
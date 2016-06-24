<?php

$recepient = "denis.kutsenko92@gmail.com";
$sitename = "Название сайта";

$Email = trim($_POST["Email"]);
$message = "Email: $name";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
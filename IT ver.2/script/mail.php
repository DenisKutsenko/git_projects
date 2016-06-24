<?php

$recepient = "denis.kutsenko92@gmail.com"; //форма работает на сервере, и указывается Ваша почта
$sitename = "Internet_Magazine";


$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone";
mail($recepient, $pagetitle "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
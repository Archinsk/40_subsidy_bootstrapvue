<?php // Страница авторизованного пользователя
  header("Access-Control-Allow-Origin: *");
  // Подключаем RedBeanPHP
  require 'rb.php';
  // Соединямся с БД
  R::setup( 'mysql:host=localhost; dbname=measures', 'mikhail', '9039033661!' ); //Указываем адрес сервера, имя базы, логин и пароль пользователя (синтаксис RedBeanPHP)
  $scenario = $_GET['scenario'];
  $newslist = R::find( 'measureslist', " scenario = :scenario ", [':scenario' => $scenario] );
  header('Content-Type: application/json');
  echo json_encode($newslist);
?>
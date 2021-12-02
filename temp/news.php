<?php // Страница авторизованного пользователя
  header("Access-Control-Allow-Origin: *");
  // Подключаем RedBeanPHP
  require 'rb.php';
  // Соединямся с БД
  R::setup( 'mysql:host=localhost; dbname=measures', 'mikhail', '9039033661!' ); //Указываем адрес сервера, имя базы, логин и пароль пользователя (синтаксис RedBeanPHP)
  //$newslist = R::findAll( 'news' );
  $startId = $_GET['pageSize'] * ($_GET['page'] - 1) + 1;
  $finishId = $_GET['pageSize'] * $_GET['page'];
  $newslist = R::find( 'news', " id >= :startId AND id <= :finishId", [':startId' => $startId, ':finishId' => $finishId] );
  //$arrays = R::exportAll( $newslist );
  //echo $arrays;
  //echo 'newslist - ' .$newslist. '$startId - ' .$startId. '$finishId - ' .$finishId.;
  header('Content-Type: application/json');
  echo json_encode($newslist);
?>

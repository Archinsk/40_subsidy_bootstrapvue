<?php // Страница авторизованного пользователя
  header("Access-Control-Allow-Origin: *");
  // Подключаем RedBeanPHP
  require 'rb.php';
  // Соединямся с БД
  R::setup( 'mysql:host=localhost; dbname=measures', 'mikhail', '9039033661!' ); //Указываем адрес сервера, имя базы, логин и пароль пользователя (синтаксис RedBeanPHP)
  //$newslist = R::findAll( 'news' );
  $table = $_GET['table'];
  $newslist = R::find( 'news', " id >= :startId AND id <= :finishId", [':startId' => $startId, ':finishId' => $finishId] );
  //$arrays = R::exportAll( $newslist );
  //echo $arrays;
  //echo 'newslist - ' .$newslist. '$startId - ' .$startId. '$finishId - ' .$finishId.;
  header('Content-Type: application/json');
  echo json_encode($newslist);
?>

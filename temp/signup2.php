<?php

//Подключаем RedBeanPHP
require 'rb.php';
R::setup( 'mysql:host=localhost; dbname=lifeplan', 'mikhail', '9039033661!' ); //Указываем адрес сервера, имя базы, логин и пароль пользователя (синтаксис RedBeanPHP)
//Передаем все переменные из POST в переменную data
$data = $_POST;

//Если нажималась кнопка "Зарегистрироваться"
if ( isset($data['do_signup']) ) {
//Создаем массив ошибок
  $errors = array();
  if ( trim($data['login']) == '' ) {
    $errors[] = 'Введите логин';
  }
 
  if ( $data['password'] == '' ) {
    $errors[] = 'Введите пароль';
  }
 
  if ( $data['password_2'] != $data['password'] ) {
    $errors[] = 'Повторный пароль введен не верно!';
  }
 
  //Gроверка на существование пользователя в базе с таким логином
  if ( R::count('users', "login = ?", array($data['login'])) > 0) {
    $errors[] = 'Пользователь с таким логином уже существует!';
  }

//Если массив с ошибками пуст, то регистрируем пользователя
 if ( empty($errors) )
    {
//Формируем кортеж с данными пользователя
        $user = R::dispense('users');
        $user->login = $data['login'];
//Пароль вносим в хэшированном виде
//Работает толко с версии php 5.6
        $user->password = password_hash($data['password'], PASSWORD_DEFAULT); 
//А без хэширования работает$user->password = $data['password'];
//Записываем в базу данных, в таблицу user, кортеж с данными пользователя        
        R::store($user);
        echo '<div style="color:green;">Вы успешно зарегистрированы!</div><hr>';
//Иначе пишем первое значение массива ошибок
    } else {
        echo '<div style="color:red;">' .array_shift($errors). '</div><hr>';
    }
	
}
?>

<!DOCTYPE html> <!-- Документ HTML5 -->
<html lang='ru'>
  <head>
    <meta charset='utf-8'> <!-- Установка кодировки -->
    <meta name='viewport' content='width=device-width, initial-scale=1'> <!-- Для правильного масштабирования и установки ширины страницы на мобильных устройствах -->

    <!-- Блок загрузки фрэймворков для работы Bootstrap -->
    <!-- Latest compiled and minified CSS -->
<!-- <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'> -->
    <!-- jQuery library -->
<!-- <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script> -->
    <!-- Popper JS -->
<!-- <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'></script> -->
    <!-- Latest compiled JavaScript -->
<!-- <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'></script> -->

    <!-- Стили плавающих подсказок форм -->
<!--     <link href="floating-labels.css" rel="stylesheet"> -->

    <!-- Загрузка иконок Awesome-->
    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>
    <!-- Загрузка иконок Google-->  
    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'>
	
    <!-- Стили записей с делами-->  	
<!--	<link rel="stylesheet" href="styleTDL1.css"> -->
	
	<title>Страница регистрации</title> <!-- Название вкладки в браузере -->
  </head>

<body>
 


 <form action="signup2.php" class="form-signin modal-content" method="POST"> <!--Уточнить запись метода, modal-content взят с w3school-->
     <input type="text" id="inputLogin" class="form-control" placeholder="Login" name="login" value="<?php echo @$data['login']; ?>"> <!--Уточнить запись имени (name)-->
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" name="password" value="<?php echo @$data['password']; ?>"> <!--Уточнить запись имени (name)-->
    <input type="password" id="verifyPassword" class="form-control" placeholder="Password" name="password_2" value="<?php echo @$data['password_2']; ?>">
    <label for="verifyPassword">Пароль ещё раз</label>
    <button class="btn btn-lg btn-primary btn-block" type="submit" name="do_signup">Зарегистрироваться</button>
    <p><br>Уже зарегистрированы? <a href="lifeplan.php">Войти</a></p>
 </form>

</body>
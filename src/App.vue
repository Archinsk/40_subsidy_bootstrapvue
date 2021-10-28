<template>
  <div id="app">
    <div class="container">
      <div class="chat-section row">
        <div class="col-2">
          <img src="./assets/default.jpg" alt="">
        </div>
        <div class="col-10">
          <div class="alert alert-warning" role="alert">
            Привет, я робот Фёдор! Напишите мне...
          </div>
        </div>
      </div>
      <div class="search-section row">
        <div class="col-2">Третье</div>
        <div class="col-10">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Просто напишите, что желаете найти">
              </div>
            </div>
            <div class="col-2">
              <button type="submit" class="btn btn-block btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div class="answer-section row">
        <div class="col-2">Пятое</div>
        <div class="col-10">
          <button type="button" class="btn btn-primary">COVID</button>
          <button type="button" class="btn btn-secondary">Перепись населения</button>
          <button type="button" class="btn btn-success">Пособия</button>
          <button type="button" class="btn btn-danger">Как зарегистрироваться</button>
        </div>
      </div>
      <div class="feature-section row">
        <div class="col-2">Седьмое</div>
        <div class="col-10">
          <div>Я только учусь, но могу предложить</div>
          <div class="row">
            <div class="feature col-4">
              <a class="btn btn-primary" href="#" role="button">
                <i class="bi bi-arrow-down-right-square"></i>
                Фича 1
              </a>
            </div>
            <div class="feature col-4">
              <a class="btn btn-primary" href="#" role="button">
                <i class="bi bi-arrow-down-right-square"></i>
                Фича 2
              </a>
            </div>
            <div class="feature col-4">
              <a class="btn btn-primary" href="#" role="button">
                <i class="bi bi-arrow-down-right-square"></i>
                Фича 3
              </a>
            </div>
          </div>
          <div class="row">
            <div class="feature col-4">
              <a class="btn btn-primary" href="#" role="button">
                <i class="bi bi-arrow-down-right-square"></i>
                Фича 4
              </a>
            </div>
            <div class="feature col-4">
              <a class="btn btn-primary" href="#" role="button">
                <i class="bi bi-arrow-down-right-square"></i>
                Фича 5
              </a>
            </div>
            <div class="feature col-4">
              <a class="btn btn-primary" href="#" role="button">
                <i class="bi bi-arrow-down-right-square"></i>
                Фича 6
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="container">
    <h4 class="title-primary text-center">Наши преимущества</h4>

    <div class="row row-cols-2 row-cols-sm-2 row-cols-lg-4">
      <div class="col">
        <div class="advantage h-100">
          <img
            src="@/assets/advantages/adv21.jpg"
            class="advantage__image"
            alt="..."
          />
          <div class="advantage__comment text-center">
            <h5 class="card-title">Контракты</h5>
            <p class="card-text">
              Заключайте контракты с другими участниками прямо в личном кабинете
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="advantage h-100">
          <img
            src="@/assets/advantages/adv22.jpg"
            class="advantage__image"
            alt="..."
          />
          <div class="advantage__comment text-center">
            <h5 class="card-title">Партнеры</h5>
            <p class="card-text">Находите партнеров из других отраслей</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="advantage h-100">
          <img
            src="@/assets/advantages/adv23.jpg"
            class="advantage__image"
            alt="..."
          />
          <div class="advantage__comment text-center">
            <h5 class="card-title">Поддержка</h5>
            <p class="card-text">
              Получайте поддержку и консультации с консьерж-сервисом
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="advantage h-100">
          <img
            src="@/assets/advantages/adv24.jpg"
            class="advantage__image"
            alt="..."
          />
          <div class="advantage__comment text-center">
            <h5 class="card-title">Поиск</h5>
            <p class="card-text">
              Открывайте новые возможности с помощью поиска на основе
              искусственного интеллекта
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advantages",
  data() {
    return {
      imgurl: "../assets/advantages/adv1.jpg",
    };
  },
};
</script>

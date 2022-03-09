<template>
  <article class="news-article">
    <div class="container">
      <h4 class="title-primary text-center py-2">
        Data-Хакатон World AI&Data Challenge по решению глобальных социальных
        задач
      </h4>
      <div class="news-article__author">
        <div class="news-article-source">
          <img src="@/assets/rialogo.jpg" alt="" class="news-source__logo" />
          <a href="#" class="news-source__link h-100">РИА Новости</a>
        </div>
        <span>10:15 <b>7 августа 2021</b></span>
      </div>
      <div class="news-article-main-image">
        <img
          src="@/assets/news/news2.jpg"
          class="news-article-main-image_full-width"
          alt="..."
        />
      </div>
      <div class="content">
        <p>Стань частью мирового data-сообщества!</p>
        <p>Не пропусти data-хакатон World AI&Data Challenge!</p>
        <p>
          Приглашаем data-специалистов, студентов и представителей IT-компаний
          принять участие в масштабном data-хакатоне по решению социально
          значимых задач при поддержке Агентства стратегических инициатив и
          Точки кипения – МГУТУ им. К.Г. Разумовского. Лучшие разработанные
          решения будут внедряться по всей России и представлены для
          тиражирования в другие страны!
        </p>
        <p>Когда: <b>30-31 августа 2021 года.</b></p>
        <p>Почему стоит участвовать:</p>
        <ul>
          <li>
            Ты можешь стать тем, кто создаст решение для важных
            социально-экономических задач, востребованных как в России, так и в
            других странах
          </li>
          <li>
            Сможешь с командой проверить гипотезы решений, доработать свой MVP с
            экспертами и побороться за призовой фонд II этапа конкурса – 5,5 млн
            рублей
          </li>
          <li>Лучшие участники получат мерч DataMasters</li>
          <li>Сможешь найти команду и идеи для стартапа</li>
          <li>Студентам засчитают участие как практику в универе</li>
          <li>
            Мгновенный фидбек от экспертов и подходы к решению других участников
          </li>
          <li>
            Прокачаешь компетенции и просто круто проведешь время среди
            единомышленников
          </li>
        </ul>
        <p>
          Также ты сможешь показать себя лучшим российским и международным
          экспертам, заказчикам, а также председателю попечительского совета –
          заместителю председателя правительства РФ Дмитрию Чернышенко.
        </p>
        <p>
          Подробнее о конкурсе:
          <a href="https://datamasters.ru/aianddata" :class="'text-' + theme"
            >https://datamasters.ru/aianddata</a
          >
        </p>
        <p>
          Остались вопросы? Задавай в telegram-чате
          <a href="https://t.me/datamasters_asi" :class="'text-' + theme">DataMasters</a>
        </p>
      </div>

      <div class="news-article-tags">
        Теги:
        <a href="#" :class="'text-' + theme">Информационные технологии</a>
        <a href="#" :class="'text-' + theme">Обучение</a>
        <a href="#" :class="'text-' + theme">Конкурсы</a>
      </div>
      <div class="news-article-comments">
        <p>
          <button
            :class="'btn btn-outline-' + theme"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Комментарии
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            Данную новость еще никто не комментировал. Вы можете стать первым!
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "NewsInfo",
  props: ["theme"]
};
</script>

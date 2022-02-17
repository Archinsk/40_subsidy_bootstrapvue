<template>
  <div class="card">
    <div class="card-body">
      <div class="card-text-block">
        <router-link class="news-link stretched-link" :to="newsItem.link">
          <h5 class="card-title">{{ newsItem.title }}</h5>
        </router-link>
        <p class="card-text">{{ newsItem.text }}</p>
      </div>
      <div class="card__image_full-width">
        <img
          class="card__image"
          alt="Изображение анонса новости"
          :src="newsItem.image_path + newsItem.image_file_name"
        />
      </div>
      <div class="card__footer">
        <div class="news-source">
          <img
            class="news-source__logo"
            alt="Логотип новостного источника"
            :src="newsItem.source_logo_path + newsItem.source_logo_file_name"
          />
          <a class="news-source__link" :href="newsItem.source_link">{{
            newsItem.source_title
          }}</a>
        </div>
        <span>{{ newsItem.publication_date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// Need a text cropping (Ellipsis) method
export default {
  name: "NewsPreviewListItem",
  props: ["newsItem"],
};
</script>

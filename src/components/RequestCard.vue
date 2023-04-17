<template>
  <div class="card request__card">
    <div class="card-body">
      <h5 class="card-title mb-0">
        <a href="subsidy.html">
          <span class="badge badge-primary mr-2"
            >№{{ request.request_number }}</span
          >
          {{ request.request_title }}
        </a>
      </h5>
    </div>
    <div class="card-footer bg-transparent request__card__footer">
      <p>Текущий статус: зарегистрировано</p>
      <p>Дата подачи: {{ request.request_start_date }}</p>
      <p>Статус обновлен: {{ request.request_finish_date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RequestCard",

  props: ["request"],
};
</script>

<style lang="scss" scoped>
$gap-req: 0.5rem;
$gap: 1rem;

.request__card {
  margin-bottom: $gap-req;

  .card-body {
    a {
      text-decoration: none;
      color: #212529;
    }
  }

  .request__card__footer {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }

    p {
      margin-bottom: 0;
    }
  }
}
</style>

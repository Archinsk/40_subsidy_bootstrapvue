<template>
  <li class="list-group-item pl-5">
    <label class="d-flex gap-2">
      <input class="form-check-input flex-shrink-0" type="checkbox" />
      <span>
        Заголовок
        <small class="d-block text-muted">Обращение 7654 было обновлено</small>
      </span>
    </label>
    <a href="#">Ссылка</a>
    <div>Вчера</div>
  </li>
</template>

<script>
export default {
  name: "MessagesListItem",
};
</script>

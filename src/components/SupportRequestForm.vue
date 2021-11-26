<template>
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Адрес электронной почты</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="mgp-nsk@yandex.ru" disabled>
        </div>
        <div class="form-group">
            <label for="exampleFormControlSelect1">Тема обращения</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>Личный кабинет, регистрация, авторизация</option>
                <option>Проблемы с обработкой заявки</option>
                <option>Технические неполадки</option>
                <option>Прочее</option>
            </select>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Текст сообщения</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
<!--        <button type="submit" class="btn btn-primary float-right">Отправить</button>-->
        <b-button variant="primary" @click="$bvModal.hide('modal-1')" class="float-right">Отправить</b-button>
    </form>
</template>

<script>
    export default {
        name: "SupportRequestForm"
    }
</script>

<style scoped>

</style>

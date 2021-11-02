<template>
    <main class="content">

        <div class="profile__wrapper container">
            <article class="profile">
                <h2 class="profile__title">Личный кабинет</h2>
                <div class="profile__body">
                    <section class="profile__user__info">
                        <div class="profile__user__info__details">
                            <img class="profile__avatar mr-2" src="@/assets/default.jpg" alt="">
                            <div class="profile__text">
                                <div class="profile__user__name">Васильев Михаил Анатольевич</div>
                                <div class="profile__user__snils">СНИЛС: 073-976-837 25</div>
                            </div>
                        </div>
                        <button type="button" class="user__competence btn btn-outline-secondary" data-toggle="modal"
                                href="#profileEdit">Редактировать
                        </button>
                    </section>

                    <b-tabs content-class="mt-3">
                        <b-tab title="Личные данные" active>
                            <section class="user__basic__info">
                                <h3 class="user__basic__info__title">Основная информация</h3>
                                <div class="user__about term__block">
                                    <div class="user__about__term term">
                                        Обо мне:
                                        <span class="dotted__line"></span>
                                    </div>
                                    <div class="user__about__details">
                                        Биография. Дополнительная информация
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="user__phone term__block col-md-6">
                                        <div class="user__phone__term term">
                                            Телефон:
                                            <span class="dotted__line"></span>
                                        </div>
                                        <div class="user__phone__details">
                                            8-903-903-3661
                                        </div>
                                    </div>
                                    <div class="user__mail term__block col-md-6">
                                        <div class="user__mail__term term">
                                            E-mail:
                                            <span class="dotted__line"></span>
                                        </div>
                                        <div class="user__mail__details">
                                            mgp-nsk@yandex.ru
                                        </div>
                                    </div>
                                </div>
                                <div class="user__social term__block">
                                    <div class="user__social__term term">
                                        Соцсети:
                                        <span class="dotted__line"></span>
                                    </div>
                                    <div class="user__social__details">
                                        vk.ru, ok.ru
                                    </div>

                                </div>
                            </section>

                            <section class="user__competencies">
                                <h3 class="user__competencies__title">Компетенции</h3>
                                <span class="badge badge-secondary mr-2">Информационные технологии</span>
                                <span class="badge badge-secondary mr-2">Инженерия</span>
                                <span class="badge badge-secondary mr-2">Архитектура</span>
                                <button class="user__competence btn btn-outline-secondary">+ Добавить</button>
                            </section>

                            <section class="experience">
                                <h3 class="experience__title">Опыт работы</h3>
                                <div class="experience__company term__block">
                                    <div class="experience__company__term term">
                                        Компания:
                                        <span class="dotted__line"></span>
                                    </div>
                                    <div class="experience__company__details">
                                        Информационные системы и сервисы
                                    </div>
                                </div>
                                <div class="experience__position term__block">
                                    <div class="experience__position__term term">
                                        Должность:
                                        <span class="dotted__line"></span>
                                    </div>
                                    <div class="experience__position__details">
                                        Аналитик
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="experience__start__date term__block col-md-6">
                                        <div class="experience__start__date__term term">
                                            Дата начала:
                                            <span class="dotted__line"></span>
                                        </div>
                                        <div class="experience__start__date__details">
                                            14.02.2018
                                        </div>
                                    </div>
                                    <div class="experience__finish__date term__block col-md-6">
                                        <div class="experience__finish__date__term term">
                                            Дата окончания:
                                            <span class="dotted__line"></span>
                                        </div>
                                        <div class="experience__finish__date__details">
                                            14.02.2022
                                        </div>
                                    </div>
                                </div>
                                <div class="experience__info term__block">
                                    <div class="experience__info__term term">
                                        Описание:
                                        <span class="dotted__line"></span>
                                    </div>
                                    <div class="experience__info__details">
                                        Общение с заказчиком. Подготовка технических документов
                                    </div>
                                </div>
                            </section>
                            <section class="education">
                                <h3 class="education__title">Образование</h3>
                                <div class="education__institution term__block">
                                    <div class="education__institution__term term">
                                        Учебное заведение:
                                        <span class="dotted__line"></span>
                                    </div>
                                    <div class="education__institution__details">
                                        НГАХА
                                    </div>
                                </div>
                                <div class="education__specialization term__block">
                                    <div class="education__specialization__term term">
                                        Специальность:
                                        <span class="dotted__line"></span>
                                    </div>
                                    <div class="education__specialization__details">
                                        Архитектор
                                    </div>
                                </div>
                                <div class="education__grade term__block">
                                    <div class="education__grade__term term">
                                        Степень:
                                        <span class="dotted__line"></span>
                                    </div>
                                    <div class="education__grade__details">
                                        Специалитет
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="education__start__date term__block col-md-6">
                                        <div class="education__start__date__term term">
                                            Год начала:
                                            <span class="dotted__line"></span>
                                        </div>
                                        <div class="education__start__date__details">
                                            1997
                                        </div>
                                    </div>
                                    <div class="education__finish__date term__block col-md-6">
                                        <div class="education__finish__date__term term">
                                            Год окончания:
                                            <span class="dotted__line"></span>
                                        </div>
                                        <div class="education__finish__date__details">
                                            2003
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </b-tab>
                        <b-tab title="Заявки">
                            <h2 class="measures__heading py-2">Заявки<span class="badge badge-secondary">15</span></h2>

                            <div class="row row-cols-1 g-2 mb-2">
                                <div class="col">
                                    <div class="card request__card">
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">
                                                <a href="subsidy.html">
                                                    <span class="badge badge-secondary mr-2">№001256</span>Грант
                                                    участникам
                                                    инновационного кластера на территории города Москвы на возмещение
                                                    затрат в целях
                                                    реализации комплексных инновационных проектов (КИП – собственные
                                                    средства)
                                                </a>
                                            </h5>
                                        </div>
                                        <div class="card-footer bg-transparent request__card__footer">
                                            <p>Текущий статус: зарегистрировано</p>
                                            <p>Дата подачи: 01.01.2021</p>
                                            <p>Статус обновлен: 01.08.2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card request__card">
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">
                                                <a href="subsidy.html">
                                                    <span class="badge badge-secondary mr-2">№001256</span>Грант
                                                    участникам
                                                    инновационного кластера на территории города Москвы на возмещение
                                                    затрат в целях
                                                    реализации комплексных инновационных проектов (КИП – собственные
                                                    средства)
                                                </a>
                                            </h5>
                                        </div>
                                        <div class="card-footer bg-transparent request__card__footer">
                                            <p>Текущий статус: зарегистрировано</p>
                                            <p>Дата подачи: 01.01.2021</p>
                                            <p>Статус обновлен: 01.08.2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card request__card">
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">
                                                <a href="subsidy.html">
                                                    <span class="badge badge-secondary mr-2">№001256</span>Грант
                                                    участникам
                                                    инновационного кластера на территории города Москвы на возмещение
                                                    затрат в целях
                                                    реализации комплексных инновационных проектов (КИП – собственные
                                                    средства)
                                                </a>
                                            </h5>
                                        </div>
                                        <div class="card-footer bg-transparent request__card__footer">
                                            <p>Текущий статус: зарегистрировано</p>
                                            <p>Дата подачи: 01.01.2021</p>
                                            <p>Статус обновлен: 01.08.2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card request__card">
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">
                                                <a href="subsidy.html">
                                                    <span class="badge badge-secondary mr-2">№001256</span>Грант
                                                    участникам
                                                    инновационного кластера на территории города Москвы на возмещение
                                                    затрат в целях
                                                    реализации комплексных инновационных проектов (КИП – собственные
                                                    средства)
                                                </a>
                                            </h5>
                                        </div>
                                        <div class="card-footer bg-transparent request__card__footer">
                                            <p>Текущий статус: зарегистрировано</p>
                                            <p>Дата подачи: 01.01.2021</p>
                                            <p>Статус обновлен: 01.08.2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card request__card">
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">
                                                <a href="subsidy.html">
                                                    <span class="badge badge-secondary mr-2">№001256</span>Грант
                                                    участникам
                                                    инновационного кластера на территории города Москвы на возмещение
                                                    затрат в целях
                                                    реализации комплексных инновационных проектов (КИП – собственные
                                                    средства)
                                                </a>
                                            </h5>
                                        </div>
                                        <div class="card-footer bg-transparent request__card__footer">
                                            <p>Текущий статус: зарегистрировано</p>
                                            <p>Дата подачи: 01.01.2021</p>
                                            <p>Статус обновлен: 01.08.2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card request__card">
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">
                                                <a href="subsidy.html">
                                                    <span class="badge badge-secondary mr-2">№001256</span>Грант
                                                    участникам
                                                    инновационного кластера на территории города Москвы на возмещение
                                                    затрат в целях
                                                    реализации комплексных инновационных проектов (КИП – собственные
                                                    средства)
                                                </a>
                                            </h5>
                                        </div>
                                        <div class="card-footer bg-transparent request__card__footer">
                                            <p>Текущий статус: зарегистрировано</p>
                                            <p>Дата подачи: 01.01.2021</p>
                                            <p>Статус обновлен: 01.08.2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card request__card">
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">
                                                <a href="subsidy.html">
                                                    <span class="badge badge-secondary mr-2">№001256</span>Грант
                                                    участникам
                                                    инновационного кластера на территории города Москвы на возмещение
                                                    затрат в целях
                                                    реализации комплексных инновационных проектов (КИП – собственные
                                                    средства)
                                                </a>
                                            </h5>
                                        </div>
                                        <div class="card-footer bg-transparent request__card__footer">
                                            <p>Текущий статус: зарегистрировано</p>
                                            <p>Дата подачи: 01.01.2021</p>
                                            <p>Статус обновлен: 01.08.2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card request__card">
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">
                                                <a href="subsidy.html">
                                                    <span class="badge badge-secondary mr-2">№001256</span>Грант
                                                    участникам
                                                    инновационного кластера на территории города Москвы на возмещение
                                                    затрат в целях
                                                    реализации комплексных инновационных проектов (КИП – собственные
                                                    средства)
                                                </a>
                                            </h5>
                                        </div>
                                        <div class="card-footer bg-transparent request__card__footer">
                                            <p>Текущий статус: зарегистрировано</p>
                                            <p>Дата подачи: 01.01.2021</p>
                                            <p>Статус обновлен: 01.08.2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card request__card">
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">
                                                <a href="subsidy.html">
                                                    <span class="badge badge-secondary mr-2">№001256</span>Грант
                                                    участникам
                                                    инновационного кластера на территории города Москвы на возмещение
                                                    затрат в целях
                                                    реализации комплексных инновационных проектов (КИП – собственные
                                                    средства)
                                                </a>
                                            </h5>
                                        </div>
                                        <div class="card-footer bg-transparent request__card__footer">
                                            <p>Текущий статус: зарегистрировано</p>
                                            <p>Дата подачи: 01.01.2021</p>
                                            <p>Статус обновлен: 01.08.2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card request__card">
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">
                                                <a href="subsidy.html">
                                                    <span class="badge badge-secondary mr-2">№001256</span>Грант
                                                    участникам
                                                    инновационного кластера на территории города Москвы на возмещение
                                                    затрат в целях
                                                    реализации комплексных инновационных проектов (КИП – собственные
                                                    средства)
                                                </a>
                                            </h5>
                                        </div>
                                        <div class="card-footer bg-transparent request__card__footer">
                                            <p>Текущий статус: зарегистрировано</p>
                                            <p>Дата подачи: 01.01.2021</p>
                                            <p>Статус обновлен: 01.08.2021</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </b-tab>
                    </b-tabs>
                </div>
            </article>
        </div>

        <div class="modal fade" id="profileEdit" tabindex="-1" aria-labelledby="profileEditLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="profileEditLabel">Редактирование профиля</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div class="mb-3">
                                <label for="aboutMeProfileEdit" class="form-label">Обо мне</label>
                                <textarea class="form-control" id="aboutMeProfileEdit" rows="3">Биография. Дополнительная информация</textarea>
                            </div>

                            <h3>Контактные данные</h3>
                            <div class="mb-3">
                                <label for="emailProfileEdit" class="form-label">Email</label>
                                <input type="email" class="form-control" id="emailProfileEdit"
                                       value="mgp-nsk@yandex.ru">
                            </div>
                            <button class="btn btn-outline-secondary">+ Добавить</button>
                            <div class="mb-3">
                                <label for="phoneProfileEdit" class="form-label">Телефон</label>
                                <input type="tel" class="form-control" id="phoneProfileEdit" value="+7(903)903-3661">
                            </div>
                            <button class="btn btn-outline-secondary">+ Добавить</button>
                            <div class="mb-3">
                                <label for="socialProfileEdit" class="form-label">Социальные сети</label>
                                <input type="url" class="form-control" id="socialProfileEdit" value="+7(903)903-3661">
                            </div>
                            <button class="btn btn-outline-secondary">+ Добавить</button>

                            <h3>Опыт работы</h3>
                            <div class="mb-3">
                                <label for="emailProfileEdit2" class="form-label">Email</label>
                                <input type="email" class="form-control" id="emailProfileEdit2"
                                       value="mgp-nsk@yandex.ru">
                            </div>

                            <h3>Образование</h3>

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отменить</button>
                        <button type="button" class="btn btn-primary">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<script>
    export default {
        name: "AccountInfo"
    }
</script>

<style lang="scss" scoped>
    .row {
        margin: -0.5em -0.25em;
    }

    .row > * {
        margin-top: 0.5em;
        padding-left: 0.25em;
        padding-right: 0.25em;
    }

    .profile {

        .profile__user__info {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            .profile__user__info__details {
                display: flex;
                align-items: center;

                .profile__avatar {
                    height: 118px;
                    border-radius: 50%;
                }
            }

        }

        .user__basic__info {

        }

        .term__block {
            display: flex;

            .term {
                font-weight: bold;
                width: 10rem;
                overflow: hidden;

                .dotted__line {
                    position: relative;

                    &::after {
                        content: "";
                        position: absolute;
                        bottom: 0.2rem;
                        margin-left: 0.5rem;
                        width: 100rem;
                        border-bottom: 0.1rem dotted rgba(0, 0, 0, 0.2);
                    }
                }
            }
        }

        .request__card {

            .card-body {

                a {
                    text-decoration: none;
                    color: #212529;
                }
            }

            .request__card__footer {
                align-items: center;
                justify-content: space-between;
                @media (min-width: 768px) {
                    display: flex;
                }

                p {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>

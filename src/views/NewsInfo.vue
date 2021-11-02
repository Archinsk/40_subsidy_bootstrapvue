<template>
    <main class="content">

        <article class="news-article">
            <div class="news-article__wrapper container">
                <h2 class="news-article__header text-center py-2">
                    Data-Хакатон World AI&Data Challenge по решению глобальных социальных задач
                </h2>
                <div class="news-article__author">
                    <div class="news-article-source">
                        <img src="@/assets/default.jpg" alt="" class="news-source__logo">
                        <a href="#" class="news-source__link h-100">Источник 1</a>
                    </div>
                    <span>10:15 <b>7 августа 2021</b></span>
                </div>
                <div class="news-article__image_full-width">
                    <img src="@/assets/default.jpg" class="news-article__main-image" alt="...">
                </div>
                <div class="content">
                    <p>Стань частью мирового data-сообщества!</p>
                    <p>Не пропусти data-хакатон World AI&Data Challenge!</p>
                    <p>Приглашаем data-специалистов, студентов и представителей IT-компаний принять участие в масштабном
                        data-хакатоне по решению социально значимых задач при поддержке Агентства стратегических инициатив и
                        Точки кипения – МГУТУ им. К.Г. Разумовского. Лучшие разработанные решения будут внедряться по всей
                        России и представлены для тиражирования в другие страны!</p>
                    <p>Когда: <b>30-31 августа 2021 года.</b></p>
                    <p>Почему стоит участвовать:</p>
                    <ul>
                        <li>Ты можешь стать тем, кто создаст решение для важных социально-экономических задач,
                            востребованных как в России, так и в других странах
                        </li>
                        <li>Сможешь с командой проверить гипотезы решений, доработать свой MVP с экспертами и побороться за
                            призовой фонд II этапа конкурса – 5,5 млн рублей
                        </li>
                        <li>Лучшие участники получат мерч DataMasters</li>
                        <li>Сможешь найти команду и идеи для стартапа</li>
                        <li>Студентам засчитают участие как практику в универе</li>
                        <li>Мгновенный фидбек от экспертов и подходы к решению других участников</li>
                        <li>Прокачаешь компетенции и просто круто проведешь время среди единомышленников</li>
                    </ul>
                    <p>Также ты сможешь показать себя лучшим российским и международным экспертам, заказчикам, а также
                        председателю попечительского совета – заместителю председателя правительства РФ Дмитрию
                        Чернышенко.</p>
                    <p>Подробнее о конкурсе: <a href="https://datamasters.ru/aianddata">https://datamasters.ru/aianddata</a>
                    </p>
                    <p>Остались вопросы? Задавай в telegram-чате <a href="https://t.me/datamasters_asi">DataMasters</a></p>
                </div>

                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/default.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Заголовок 1</h5>
                                <p>Возможность найти команду и идеи для стартапа</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/default.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Заголовок 2</h5>
                                <p>Фидбек от экспертов и подходы к решению других участников</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/default.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Заголовок 3</h5>
                                <p>Лучшие участники получат мерч DataMasters</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div class="news-article__tags">
                    Теги:
                    <a href="#">Информационные технологии</a>
                    <a href="#">Обучение</a>
                    <a href="#">Конкурсы</a>
                </div>
                <div class="news-article__comments">
                    <p>
                        <button class="btn btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
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


    </main>
</template>

<script>
    export default {
        name: "NewsInfo"
    }
</script>

<style lang="scss" scoped>
    .news-article {

        .news-article__author {
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
            color: #6c757d;

            .news-article-source {
                height: 100%;

                .news-source__logo {
                    height: 100%;
                    margin-right: 0.5rem;
                    border-radius: 0.25rem;
                }

                .news-source__link {
                    text-decoration: none;
                    color: #6c757d;
                }
            }
        }

        .news-article__image_full-width {
            height: 15rem;
            display: flex;
            align-items: center;
            overflow: hidden;
            border-radius: 0.25rem;
            margin-bottom: 1rem;

            @media (min-width: 576px) {
                height: 25rem;
            }

            @media (min-width: 768px) {
                height: 25rem;
            }

            @media (min-width: 992px) {
                height: 30rem;
            }

            @media (min-width: 1200px) {
                height: 35rem;
            }

            @media (min-width: 1400px) {
                height: 40rem;
            }

            .news-article__main-image {
                width: 100%;
            }
        }

        .carousel {
            margin-bottom: 1rem;

            .carousel-inner {

                .carousel-item {
                    height: 20rem;

                    img {
                        height: auto;
                        transform: translate(0, calc(-50% + 10rem));
                    }
                }
            }
        }

        .news-article__tags {
            margin-bottom: 1rem;

            a {
                margin-left: 1rem;
            }
        }

        .news-article__comments {
            margin-bottom: 1rem;
        }
    }
</style>

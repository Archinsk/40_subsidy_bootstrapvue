<template>
    <div>
        <HeaderOffcavas/>

    <main class="content">

        <article class="news-article">
            <div class="news-article__wrapper container">
                <h2 class="news-article__header text-center py-2">
                    Data-Хакатон World AI&Data Challenge по решению глобальных социальных задач
                </h2>
                <div class="news-article__author">
                    <div class="news-article-source">
                        <img src="@/assets/rialogo.jpg" alt="" class="news-source__logo">
                        <a href="#" class="news-source__link h-100">РИА Новости</a>
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
                        data-хакатоне по решению социально значимых задач при поддержке Агентства стратегических
                        инициатив и
                        Точки кипения – МГУТУ им. К.Г. Разумовского. Лучшие разработанные решения будут внедряться по
                        всей
                        России и представлены для тиражирования в другие страны!</p>
                    <p>Когда: <b>30-31 августа 2021 года.</b></p>
                    <p>Почему стоит участвовать:</p>
                    <ul>
                        <li>Ты можешь стать тем, кто создаст решение для важных социально-экономических задач,
                            востребованных как в России, так и в других странах
                        </li>
                        <li>Сможешь с командой проверить гипотезы решений, доработать свой MVP с экспертами и побороться
                            за
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
                    <p>Подробнее о конкурсе: <a
                            href="https://datamasters.ru/aianddata">https://datamasters.ru/aianddata</a>
                    </p>
                    <p>Остались вопросы? Задавай в telegram-чате <a href="https://t.me/datamasters_asi">DataMasters</a>
                    </p>
                </div>

                <div class="news-article__tags">
                    Теги:
                    <a href="#">Информационные технологии</a>
                    <a href="#">Обучение</a>
                    <a href="#">Конкурсы</a>
                </div>
                <div class="news-article__comments">
                    <p>
                        <button class="btn btn-outline-secondary" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
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

        <Footer/>
    </div>
</template>

<script>
    import HeaderOffcavas from "@/components/HeaderOffcavas";
    import Footer from "@/components/Footer";

    export default {
        name: "NewsInfo",

        components: {
            HeaderOffcavas,
            Footer,
        },
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

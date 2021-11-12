<template>
    <div>
        <HeaderOffcavas/>

    <main class="content">

        <section class="support">
            <div class="support__wrapper container">

                <div class="support__header">
                    <h4 class="support__name">
                        Гранты субъектам малого и среднего предпринимательства на реализацию проектов в приоритетных
                        сферах экономики
                    </h4>
                    <div class="support__details">
                        <div class="support__date">Приём заявок<br>
                            <b>с 11.02.2021 по 12.03.2021</b>
                        </div>
                        <div class="support__manual">
                            <button class="support__manual__button btn btn-outline-secondary">
                                Как подать заявку?
                            </button>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="support__card">
                    <div class="support__card__header row">
                        <div class="support__owner col-md-6 col-xl-4">
                            <div class="support__owner__header">
                                Инициатор
                            </div>
                            <div class="support__owner__logo">
                                <img class="org-logo" src="@/assets/altbus_logo.png" alt="">
                                <div class="support__owner__name">
                                    Управлению по развитию предпринимательства и рыночной инфраструктуры
                                </div>
                            </div>
                        </div>
                        <div class="support__conditions col-12 col-md-6 col-xl-5">
                            <div class="support__conditions__header">Размер поддержки</div>
                            <div class="support__size">до 2 000 000 рублей</div>
                            <div class="support__size__info"></div>
                        </div>
                        <div class="support__buttons col">
                            <img class="support__icon" src="@/assets/electronic.png" alt="">
                            <button class="btn btn-outline-secondary">Подать заявку</button>
                        </div>
                    </div>

                    <hr>

                    <b-card no-body>
                        <b-tabs pills card vertical nav-wrapper-class="col-12 col-md-4">
                            <b-tab title="Описание" active>
                                <b-card-text>
                                    <h3>Описание</h3>
                                    <p>Гранты предоставляются в размере до 70 процентов расходов, предусмотренных
                                        проектом для его реализации, но не более 2 млн рублей в год на одного
                                        субъекта.</p>
                                    <p>Приоритетными сферами экономики для целей предоставления гранта признаются:</p>
                                    <ul>
                                        <li>развитие предприятий общественного питания и придорожного сервиса в
                                            сельских территориях;
                                        </li>
                                        <li>индустрия детских товаров;</li>
                                        <li>ремесленное мастерство;</li>
                                        <li>развитие торговли в сельских территориях, за исключением административных
                                            центров муниципальных районов;
                                        </li>
                                        <li>развитие частной врачебной практики в сельских территориях;</li>
                                        <li>развитие сети пунктов технического осмотра автомототранспортных средств в
                                            сельских территориях.
                                        </li>
                                    </ul>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Требования к заявителю">
                                <b-card-text><h3>Требования к заявителю</h3>
                                    <p>Для получения Грантов субъекты должны удовлетворять следующим требованиям:</p>
                                    <ul>
                                        <li>быть зарегистрированными в качестве индивидуального предпринимателя или
                                            юридического лица, сведения о котором внесены в единый реестр субъектов
                                            малого и среднего предпринимательства;
                                        </li>
                                        <li>не являться иностранными юридическими лицами, а также российскими
                                            юридическими лицами, в уставном (складочном) капитале которых доля участия
                                            иностранных юридических лиц, чьим местом регистрации является государство
                                            (территория), включенное в утверждаемый Министерством финансов Российской
                                            Федерации перечень государств и территорий, предоставляющих льготный
                                            налоговый режим налогообложения и (или) не предусматривающих раскрытия и
                                            предоставления информации при проведении финансовых операций (офшорные
                                            зоны), в совокупности превышает 50 процентов;
                                        </li>
                                        <li>субъекты - юридические лица не должны находиться в процессе реорганизации
                                            (за исключением реорганизации в форме присоединения к юридическому лицу,
                                            являющемуся участником отбора, другого юридического лица), ликвидации, в
                                            отношении них не должна быть введена процедура банкротства, их деятельность
                                            не должна быть приостановлена в порядке, предусмотренном законодательством
                                            Российской Федерации, а индивидуальные предприниматели не должны прекратить
                                            деятельность в качестве индивидуального предпринимателя;
                                        </li>
                                        <li>не иметь просроченной задолженности по выплате заработной платы;</li>
                                        <li>не иметь в качестве основного вида деятельности предоставление
                                            недвижимости в аренду;
                                        </li>
                                        <li>иметь лицензию на осуществление медицинской деятельности (по направлению
                                            проекта "Развитие частной врачебной практики на селе");
                                        </li>
                                    </ul>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Необходимые документы для предоставления меры поддержки">
                                <b-card-text>
                                    <h3>Необходимые документы для предоставления меры поддержки</h3>
                                    <ul>
                                        <li>проект, содержащий календарный план его реализации и смету расходов на его
                                            осуществление, в том числе за счет средств Гранта;
                                        </li>
                                        <li>справку о списочной численности работников, размере средней заработной
                                            платы и отсутствии просроченной задолженности по ее выплате за предыдущий
                                            год и отчетный период текущего года, предшествующий дате представления
                                            заявления (с приложением форм 4-ФСС, заверенных субъектом);
                                        </li>
                                        <li>заявление, содержащее согласие участника на публикацию (размещение) в
                                            информационно-телекоммуникационной сети "Интернет" информации об участнике,
                                            подаваемой участником заявке и иной информации об участнике, связанной с
                                            отбором участников на получение государственной поддержки;
                                        </li>
                                        <li>согласие на обработку персональных данных (для индивидуального
                                            предпринимателя).
                                        </li>
                                    </ul>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Порядок рассмотрения заявок участников">
                                <b-card-text>
                                    <h3>Порядок рассмотрения заявок участников</h3>
                                    <p>Главный распорядитель выполняет следующие функции:</p>
                                    <ul>
                                        <li>осуществляет регистрацию заявок в день их поступления;</li>
                                        <li>в течение 15 рабочих дней с момента окончания приема заявок: определяет
                                            соответствие участников Конкурса требованиям пунктов 1.6 и 2.2 положения;
                                        </li>
                                        <li>рассматривает представленные заявки и документы в их составе на предмет
                                            соблюдения требований, предусмотренных пунктами 2.4, 2.6, 2.7, 3.7 положения
                                            (в том числе проводит проверку достоверности информации, содержащейся в
                                            указанных документах);
                                        </li>
                                        <li>по результатам рассмотрения заявок приказом принимает решение о допуске
                                            или об отказе в допуске к участию в Конкурсе по основаниям, указанным в
                                            пункте 2.9 положения;
                                        </li>
                                        <li>в течение 2 месяцев со дня принятия решения о допуске к участию в
                                            Конкурсе: организует работу Конкурсной комиссии по рассмотрению заявок;
                                        </li>
                                        <li>на основании итогового рейтинга, полученного в результате рассмотрения
                                            заявок Конкурсной комиссией, приказом подводит итоги Конкурса.
                                        </li>
                                    </ul>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Администратор меры">
                                <b-card-text>
                                    <h3>Администратор меры</h3>
                                    <p>Территориальный уровень меры поддержки: Региональный</p>
                                    <p>Название организации: Управлению по развитию предпринимательства и рыночной
                                        инфраструктуры</p>
                                    <p>Ссылка на сайт администратора меры поддержки: <a href="https://dep.test.ru">https://dep.test.ru/</a>
                                    </p>
                                    <p>Контактная информация: 200-00-00, e-mail: <a href="mailto:test@test.ru">test@test.ru</a>
                                    </p>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Нормативная правовая база">
                                <b-card-text>
                                    <h3>Нормативно-правовая база</h3>
                                    <p>Конкурс проводится в соответствии с постановлением от 1 сентября 2010 года N 321
                                        «Об утверждении Порядка предоставления грантов субъектам малого и среднего
                                        предпринимательства на реализацию проектов в приоритетных сферах
                                        экономики».</p>
                                </b-card-text>
                            </b-tab>
                        </b-tabs>
                    </b-card>

                </div>

            </div>
        </section>


    </main>

        <Footer/>
    </div>
</template>

<script>
    import HeaderOffcavas from "@/components/HeaderOffcavas";
    import Footer from "@/components/Footer";

    export default {
        name: "SubsidyInfo",

        components: {
            HeaderOffcavas,
            Footer,
        },
    }
</script>

<style lang="scss">
    $gap: 1rem;
    $basic-color: #003399;
    $text-color: #212529;
    $support-color: grey;
    $passive-color: #e4e4e4;
    $active-color: #fff;

    .support {
        padding-top: $gap/2;

        .support__header {

            .support__name {
                margin-bottom: $gap;
            }

            .support__details {
                &>* {
                    margin-bottom: $gap;
                }

                @media (min-width: 768px) {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .support__date {
                    color: $support-color;

                    b {
                        color: $text-color;
                    }
                }
            }
        }

        hr {
            margin-top: 0;
        }

        .support__card {

            .support__card__header {
                display: flex;
                justify-content: space-between;

                &>* {
                    margin-bottom: $gap;
                }

                .support__owner {

                    .support__owner__header {
                        color: $support-color;
                    }

                    .support__owner__logo {
                        display: flex;
                        font-weight: bolder;

                        .org-logo {
                            height: 38px;
                            margin-right: $gap/2;
                            margin-top: $gap/2;
                        }
                    }
                }

                .support__conditions {

                    @media (min-width: 768px) {
                        text-align: right;
                    }

                    .support__conditions__header {
                        color: $support-color;
                    }

                    .support__size {
                        font-size: 1.75rem;
                        font-weight: 500;
                    }

                    .support__size__info {
                        color: $support-color;
                    }
                }

                .support__buttons {
                    display: flex;
                    align-items: start;

                    @media (min-width: 768px) {
                        justify-content: flex-end;
                    }


                    .support__icon {
                        height: 38px;
                        border: 1px solid $basic-color;
                        border-radius: 0.25rem;
                        margin-right: $gap/2;
                    }
                }
            }

            hr {
                margin-top: 0;
            }

            .card {
                border: none;

                .nav {
                    background-color: transparent;
                    padding: 0;
                    margin-bottom: $gap;

                    @media (min-width: 768px) {
                        padding-right: 1.25rem;
                    }
                }

                .tab-content {
                    margin-bottom: $gap;

                    .tab-pane {
                        padding: 0;

                        @media (min-width: 768px) {
                            padding-left: 1.25rem;
                        }

                    }

                    ul {
                        padding-left: 1.25rem;
                    }

                    :nth-last-child(1) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }

</style>

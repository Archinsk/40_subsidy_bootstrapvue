<template>
  <div class="container py-2">
    <div class="btn btn-primary">Модалка</div>
    <div
      class="modal micromodal-slide"
      id="jasperSignatureModal"
      aria-hidden="true"
    >
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div
          class="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-1-title"
          style="min-width: 75rem"
        >
          <header class="modal__header">
            <h2 class="modal__title" id="modal-1-title">Подписать файл</h2>
            <button
              class="modal__close"
              aria-label="Close modal"
              data-micromodal-close
            />
          </header>
          <main class="modal__content" id="modal-1-content">
            <label for="jasperSignatureSelect">Выберите сертификат</label
            ><select
              name="jasperSignatureSelect"
              id="jasperSignatureSelect"
              class="form-control"
            ></select>
            <div class="row">
              <div
                class="col-6"
                id="cryptoProStatusDiv"
                style="margin-top: 1rem"
              >
                Статус плагина Крипто про:
                <span id="PlugInEnabledTxt"></span>
                <img width="10" height="10" id="PluginEnabledImg" />
                <br />
                <span id="PlugInVersionTxt"></span>
                <br />
                <span id="CSPVersionTxt"></span>
                <br />
                <span id="CspEnabledTxt"></span>
                <img width="10" height="10" id="CspEnabledImg" />
                <br />
                <span id="CSPNameTxt"></span>
              </div>
              <div
                class="col-6"
                id="certificateInfoDiv"
                style="display: none; margin-top: 1rem"
              >
                <p style="margin: 0; padding: 0" id="certificateSubject"></p>
                <p style="margin: 0; padding: 0" id="certificateIssuer"></p>
                <p style="margin: 0; padding: 0" id="certificateFrom"></p>
                <p style="margin: 0; padding: 0" id="certificateValidFrom"></p>
                <p style="margin: 0; padding: 0" id="certificateFAlgoName"></p>
                <p style="margin: 0; padding: 0" id="certificateProvname"></p>
                <p
                  style="margin: 0; padding: 0"
                  id="certificatePrivateKeyLink"
                ></p>
                <p style="margin: 0; padding: 0" id="certificateStatus"></p>
              </div>
            </div>
          </main>
          <footer class="modal__footer">
            <!--                    <a style="margin-left:5px;" class="btn btn-secondary" href="javascript:void(0)"-->
            <!--                       data-micromodal-close>Отмена</a>-->
            <!--                    <a style="margin-left:5px;" class="btn btn-primary" href="javascript:void(0)" id="certificateSubmitButton"-->
            <!--                       data-micromodal-close>Подписать</a>-->
            <a
              style="margin-left: 5px"
              class="btn btn-secondary"
              href="#"
              data-micromodal-close
              >Отмена</a
            >
            <a
              style="margin-left: 5px"
              class="btn btn-primary"
              href="#"
              id="certificateSubmitButton"
              data-micromodal-close
              >Подписать</a
            >
          </footer>
        </div>
      </div>
    </div>

    <!-- Кнопка-триггер модального окна -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Запустить демонстрацию модального окна
    </button>

    <!-- Модальное окно -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Заголовок модального окна
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Закрыть
            </button>
            <button type="button" class="btn btn-primary">
              Сохранить изменения
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DigitalSignature",
};
</script>

<style scoped></style>

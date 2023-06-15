<template>
  <div class="container">
    <article class="profile">
      <h4 class="title-primary text-center">Личный кабинет</h4>
      <section class="user-info">
        <div class="user-info__details">
          <img
            :class="'user-avatar bg-' + theme + ' border border-' + theme"
            src="@/assets/avatar.png"
            alt=""
          />
          <div class="user-text">
            <div class="user-text__name">
              {{ userFullName ? userFullName : "ФИО не указаны" }}
            </div>
            <div class="user-text__snils">
              {{
                user.fullInfo.userData && user.fullInfo.userData.snils
                  ? "СНИЛС: " + user.fullInfo.userData.snils
                  : "СНИЛС не указан"
              }}
            </div>
          </div>
        </div>
      </section>

      <b-tabs>
        <b-tab title="Заявления" active>
          <Applications :url="url" :theme="theme" />
        </b-tab>
        <b-tab title="Личные данные">
          <h4 class="text-center">Личные данные</h4>
          <section>
            <h5 class="secondary-title">Основная информация</h5>
            <div>
              <div class="term">
                <div class="term-title">
                  Телефон:
                  <span class="dotted-line"></span>
                </div>
                <div>не указан</div>
              </div>
              <div class="term">
                <div class="term-title">
                  E-mail:
                  <span class="dotted-line"></span>
                </div>
                <div>
                  {{
                    user.fullInfo.contacts && user.fullInfo.contacts[0].value
                      ? user.fullInfo.contacts[0].value
                      : "не указан"
                  }}
                </div>
              </div>
              <div class="term align-items-center">
                <div class="term-title">
                  Текущая роль:<span class="dotted-line"></span>
                </div>
                <Select
                  v-if="userRoles.length"
                  :items-list="userRoles"
                  default-value-label="Выберите роль"
                  :values="[user.shortInfo.roleId]"
                  @change="$emit('change-user-role', $event[0])"
                />
                <div v-else>отсутствует</div>
              </div>
              <div class="term">
                <div class="term-title">
                  Текущая организация:<span class="dotted-line"></span>
                </div>
              </div>
              <Select
                v-if="userOrganizations.length"
                :items-list="userOrganizations"
                :values="user.shortInfo.orgId ? [user.shortInfo.orgId] : []"
                default-value-label="Выберите организацию"
                @change="$emit('change-user-organization', $event[0])"
              />
              <div v-else>отсутствует</div>
            </div>
          </section>
        </b-tab>
      </b-tabs>
    </article>
  </div>
</template>

<script>
import Applications from "@/components/Applications";
import Select from "../components/universal/Forms/BS46Select";

export default {
  name: "AccountInfo",

  components: {
    Select,
    Applications,
  },

  props: ["user", "theme", "url"],

  computed: {
    userFullName: function () {
      let fullName = "";
      if (this.user.fullInfo.userData && this.user.fullInfo.userData.lastName) {
        fullName += this.user.fullInfo.userData.lastName;
      }
      if (
        this.user.fullInfo.userData &&
        this.user.fullInfo.userData.firstName
      ) {
        fullName += " " + this.user.fullInfo.userData.firstName;
      }
      if (
        this.user.fullInfo.userData &&
        this.user.fullInfo.userData.middleName
      ) {
        fullName += " " + this.user.fullInfo.userData.middleName;
      }
      return fullName;
    },
    userOrganizations: function () {
      if (this.user.fullInfo.userOrganizations.length > 0) {
        return this.user.fullInfo.userOrganizations.map((org) => {
          org.value = org.id;
          return org;
        });
      } else {
        return [];
      }
    },
    userRoles: function () {
      if (this.user.fullInfo.roles.length > 0) {
        return this.user.fullInfo.roles.map((role) => {
          role.value = role.id;
          return role;
        });
      } else {
        return [];
      }
    },
  },
};
</script>

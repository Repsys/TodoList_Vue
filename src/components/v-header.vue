<template>
  <div class="header">
    <div class="non-auth-container" v-if="!this.$store.getters.isAuth">
      <div class="container">
          <v-sign-in/>
          <button class="sign-up-btn" @click="signUpIsVisible = true">Регистрация</button>
      </div>
      <v-sign-up @closed="signUpIsVisible = false" v-if="signUpIsVisible"/>
    </div>
    <div class="auth-container" v-else>
      <div class="container">
        <div class="auth-container-account">
          <h4 class="auth-container-account__label">Аккаунт: </h4>
          <h5 class="auth-container-account__name">{{this.$store.getters.info.name}}</h5>
        </div>
        <button class="logout-btn" @click="logout()">Выйти из аккаунта</button>
      </div>
    </div>
  </div>
</template>

<script>
import vSignIn from "./v-sign-in"
import vSignUp from "./v-sign-up"

export default {
  name: 'v-header',
  components: {
    vSignIn,
    vSignUp
  },
  data: function() {
    return {
      signUpIsVisible: false
    }
  },
  methods: {
    logout: async function()
    {
      this.$store.commit('setCurPopup', {
        name: "",
        isChoice: false,
        submitText: "ОК",
        contentText: "До встречи, " + this.$store.getters.info.name
      });
      try {
        await this.$store.dispatch('logout');
      } catch (e) {
        this.$store.commit('setCurPopup', {
          name: "Error: " + e.code,
          isChoice: false,
          submitText: "ОК",
          contentText: e.message
        });
      }
    }
  }
}
</script>

<style>
    .header
    {
        position: fixed;
        background-color: #2D2A2E;
        z-index: 10;
        border-bottom: 10px solid #403e41;
        padding: 10px 0;
        width: 100%;
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
        color: white;
    }

    .non-auth-container .container
    {
        display: flex;
        justify-content: space-between;
    }

    .auth-container .container, .auth-container-account
    {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .auth-container-account__label, .auth-container-account__name
    {
      margin: 0;
    }

    .auth-container-account__label
    {
      margin-right: 10px;
    }
    
</style>

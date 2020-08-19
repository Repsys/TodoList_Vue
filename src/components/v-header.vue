<template>
  <div class="header">
    <section class="non-auth-sec" v-if="!this.$store.getters.isAuth">
      <div class="container">
          <v-sign-in/>
          <button class="sign-up-btn" @click="showSignUp()">Регистрация</button>
      </div>
      <v-sign-up @closed="closeSignUp()" v-if="signUpIsVisible"/>
    </section>
    <section class="auth-sec" v-else>
      <div class="container">
        <div class="auth-sec-account">
          <h4 class="auth-sec-account__label">Аккаунт: </h4>
          <h5 class="auth-sec-account__name">{{this.$store.getters.info.name}}</h5>
        </div>
        <button class="logout-btn" @click="logout()">Выйти из аккаунта</button>
      </div>
    </section>
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
    showSignUp: function()
    {
      this.signUpIsVisible = true;
    },
    closeSignUp: function()
    {
      this.signUpIsVisible = false;
    },
    logout: async function()
    {
      this.$store.commit('setCurPopup', {
        name: "До встречи",
        isChoice: false,
        submitText: "ОК",
        contentText: this.$store.getters.info.name
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

    .non-auth-sec .container
    {
        display: flex;
        justify-content: space-between;
    }

    .auth-sec .container, .auth-sec-account
    {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .auth-sec-account__label, .auth-sec-account__name
    {
      margin: 0;
    }

    .auth-sec-account__label
    {
      margin-right: 10px;
    }
    
</style>

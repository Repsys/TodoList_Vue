<template>
  <div class="header">
    <div class="container">
        <v-sign-in/>
        <button class="sign-up-btn" @click="signUpIsVisible = true">Регистрация</button>
    </div>
    <v-sign-up @closed="signUpIsVisible = false" v-if="signUpIsVisible"/>
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
      isAuthorized: true,
      signUpIsVisible: false
    }
  },
  methods: {
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
    }

    .header .container
    {
        display: flex;
        justify-content: space-between;
    }
</style>

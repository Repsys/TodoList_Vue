<template>
  <div id="app">
    <v-header/>
    <v-main-wrapper/>
  </div>
</template>

<script>
import vHeader from "./components/v-header"
import vMainWrapper from "./components/v-main-wrapper"

export default {
  name: 'App',
  components: {
    vHeader,
    vMainWrapper
  }
}
</script>

<style>

body
{
  background-color: #fcfcfa;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

input, button, select
    {
        min-height: 35px;
        padding: 0 10px;
        border: 1px solid #2d2a2e;
    }

    input:focus, button:focus, select:focus
    {
        outline: none;
        border: 1px outset#ee2a5b;
    }

    input, select
    {
        background-color: #fcfcfa;
    }

    select
    {
        min-height: 28px;
        max-height: 28px;
    }

    button
    {
        background-color: #4a474b;
        color: #fcfcfa;
    }

    button:hover
    {
        background-color: #3b383b;
    }

    label
    {
        color: #fcfcfa;
        margin: 0;
    }

    /* Close button */
    .close-btn
    {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 20px;
        min-height: 20px;
        width: 20px;
        height: 20px;
        background-color: #4a474b;
        color: #fcfcfa;
        border-radius: 50%;
        box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);
        user-select: none;
    }

    .close-btn:hover
    {
        color: rgb(223, 223, 223);
        text-decoration: none;
        cursor: pointer;
    }

    /* Sort checkbox style */
    .sort-arrows 
    {
        cursor: pointer;
        position: relative;
        right: 14px;
        margin-left: 14px;
        user-select: none;
    }

    .sort-reverse
    {
        display: none;
    }

    .sort-reverse + .sort-arrows:after 
    {
        content: ' ';
        position: absolute;
        bottom: -26px;
        border: 10px solid transparent;
        border-top: 10px solid #4a474b;
        border-width: 12px 7px;
    }

    .sort-reverse:checked + .sort-arrows:after
    {
        border-top-color: #ffd866;
    }

    .sort-reverse + .sort-arrows:before 
    {
        content: ' ';
        position: absolute;
        bottom: 2px;
        border: 10px solid transparent;
        border-bottom: 10px solid #ffd866;
        border-width: 12px 7px;
    }

    .sort-reverse:checked + .sort-arrows:before 
    {
        border-bottom-color: #4a474b;
    }
</style>

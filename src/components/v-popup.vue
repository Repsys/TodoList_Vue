<template>
    <div class="v-popup">
        <div class="v-popup__header">
            <span class="popup-name">{{name}}</span>
            <a class="v-popup__close-btn close-btn" v-on:click="cancel">x</a>
        </div>
        <div class="v-popup__content">
            {{contentText}}
        </div>
        <div class="v-popup__footer">
            <button v-if="isChoice" class="popup-cancel-btn" v-on:click="cancel">{{cancelText}}</button>
            <button class="popup-submit-btn" v-on:click="submit">{{submitText}}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "v-popup",
    props: {
        name: String,
        isChoice: Boolean,
        submitText: String,
        cancelText: String,
        contentText: String
    },
    methods: {
        cancel: function ()
        {
            this.$emit("canceled");
        },
        submit: function ()
        {
            this.$emit("submited");
        }
    }
}
</script>

<style>
    .v-popup
    {
        position: fixed;
        margin: 0 auto;
        top: 30%;
        padding: 20px;
        padding-top: 0;
        box-shadow: 2px 2px 20px 0px rgba(0,0,0,0.75);
        background-color: #fcfcfa;
        color: #2D2A2E;
        border-radius: 10px;
        z-index: 10;
        max-width: 500px;
    }

    .v-popup_header
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .popup-name
    {
        font-size: 20px;
    }

    .v-popup__close-btn
    {
        position: absolute;
        right: 5px;
        top: 5px;
        background-color: #fcfcfa;
        color: #403e41;
    }

    .v-popup__close-btn:hover
    {
        color: #2D2A2E;
    }

    .v-popup__content
    {
        margin: 10px 0;
    }
    
    .v-popup__footer button
    {
        padding: 5px 10px;
        color: #fcfcfa;
    }

    .popup-submit-btn
    {
        background-color: rgb(55, 173, 71);
    }
    
    .popup-submit-btn:hover
    {
        background-color: rgb(50, 146, 63);
    }

    .popup-cancel-btn
    {
        background-color: rgb(219, 54, 54);
        margin-right: 20px;
    }

    .popup-cancel-btn:hover
    {
        background-color: rgb(184, 50, 50);
    }
</style>
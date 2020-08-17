<template>
    <div class="v-popup" v-if="popup.isVisible">
        <div class="v-popup__header">
            <span class="popup-name">{{popup.name}}</span>
            <a class="close-btn v-popup__close-btn" v-on:click="cancel">x</a>
        </div>
        <div class="v-popup__content">
            {{popup.contentText}}
        </div>
        <div class="v-popup__footer">
            <button v-if="popup.isChoice" class="popup-cancel-btn" v-on:click="cancel">{{popup.cancelText}}</button>
            <button class="popup-submit-btn" v-on:click="submit">{{popup.submitText}}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "v-popup",
    props: {
        popup: {
            name: String,
            isChoice: Boolean,
            submitText: String,
            cancelText: String,
            contentText: String,
            submitFunc: Function,
            isVisible: Boolean
        }
    },
    methods: {
        cancel: function ()
        {
            this.popup.isVisible = false;
        },
        submit: function ()
        {
            this.popup.isVisible = false;
            this.popup.submitFunc();
        }
    }
}
</script>

<style>
    .v-popup
    {
        position: fixed;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        padding: 10px 40px;
        
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
        background-color: #fcfcfa;
        color: #2D2A2E;
        border-radius: 10px;
        border-top: 15px solid #403e41;
        border-bottom: 15px solid #403e41;
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
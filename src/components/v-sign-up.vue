<template>
    <div class="sign-up">
        <div class="sign-up__field">
            <label for="sign-up-name">Имя</label>
            <input type="text" id="sign-up-name" v-model="name">
        </div>
        <div class="sign-up__field">
            <label for="sign-up-email">Почта</label>
            <input type="email" id="sign-up-email" v-model="email">
        </div>
        <div class="sign-up__field">
            <label for="sign-up-password">Пароль</label>
            <input type="password" id="sign-up-password" v-model="password">
        </div>
        <button class="sign-up__btn" v-on:click="signUp()">Создать аккаунт</button>
        <a class="sign-up__close-btn close-btn" v-on:click="close()">x</a>
    </div>
</template>

<script>
export default {
    name: "v-sign-up",
    data: function() {
        return {
            email: "",
            password: "",
            name: ""
        }
    },
    props: {
    },
    methods: {
        close: function()
        {
            this.$emit("closed");
        },
        signUp: async function()
        {
            const signUpData = {
                email: this.email,
                password: this.password,
                name: this.name
            }
            try {
                await this.$store.dispatch("signUp", signUpData);
                this.$store.commit('setCurPopup', {
                    name: "Аккаунт успешно создан",
                    isChoice: false,
                    submitText: "ОК",
                    contentText: this.name
                });
                this.close();
                await this.$store.dispatch("signIn", {
                    email: this.email, 
                    password: this.password});
            } catch (e) {e}
        }
    }
}
</script>

<style>
    .sign-up
    {
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        background-color: #2D2A2E;
        border: 10px solid #403e41;
        border-radius: 10px;
        padding: 40px;
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
    }

    .sign-up__field
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .sign-up__field label
    {
        margin-right: 10px;
    }

    .sign-up__close-btn
    {
        position: absolute;
        right: 5px;
        top: 5px;
    }
</style>
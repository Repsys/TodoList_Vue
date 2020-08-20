<template>
    <div class="sign-in">
        <div class="sign-in__item">
            <label for="sign-in-email">Почта</label>
            <input type="email" id="sign-in-email" v-model="email">
        </div>
        <div class="sign-in__item">
            <label for="sign-in-password">Пароль</label>
            <input type="password" id="sign-in-password" v-model="password">
        </div>
        <button class="sign-in__item" v-on:click="signIn()">Войти</button>
    </div>
</template>

<script>
export default {
    name: "v-sign-in",
    data: function() {
        return {
            email: "trup@mail.ru",
            password: "123456"
        }
    },
    props: {
    },
    methods: {
        signIn: async function()
        {
            const signInData = {
                email: this.email,
                password: this.password
            }

            try {
                await this.$store.dispatch("signIn", signInData);
                this.$store.commit('setCurPopup', {
                    name: "Добро пожаловать",
                    isChoice: false,
                    submitText: "ОК",
                    contentText: this.$store.getters.info.name
                });
            } catch (e) {e}
        }
    }
}
</script>

<style>
    .sign-in
    {
        display: flex;
        align-items: center;
    }

    .sign-in__item
    {
        margin-right: 30px;
    }

    .sign-in__item label
    {
        margin-right: 10px;
    }
</style>
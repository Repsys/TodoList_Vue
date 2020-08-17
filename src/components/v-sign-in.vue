<template>
    <div class="sign-in">
        <div class="sign-in__item">
            <label for="sign-in-email">Почта</label>
            <input type="email" id="sign-in-email">
        </div>
        <div class="sign-in__item">
            <label for="sign-in-password">Пароль</label>
            <input type="password" id="sign-in-password">
        </div>
        <button class="sign-in__item">Войти</button>
    </div>
</template>

<script>
export default {
    name: "v-sign-in",
    props: {
    },
    methods: {
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
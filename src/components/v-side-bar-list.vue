<template>
    <div class="col-12">
        <div v-on:click="pickList" class="v-side-bar__list" :class="{picked: isCurList}">
            {{listName}}
        </div>
    </div>
</template>

<script>
export default {
    name: "v-side-bar-list",
    props: {
        listName: String,
        isCurList: Boolean
    },
    methods: {
        pickList: function () 
        {
            this.$emit("picked", this.listName);
        }
    }
}
</script>

<style>
    .v-side-bar__list
    {
        color: #fcfcfa;
        background-color: #403e41;
        border: 1px solid #403e41;
        margin-bottom: 10px;
        padding: 5px 10px;
    }

    .v-side-bar__list:hover
    {
        color: rgb(223, 223, 223);
    }

    .picked
    {
        border-color: #ffd866;
    }

</style>
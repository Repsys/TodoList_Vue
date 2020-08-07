<template>
    <div class="col-12">
        <div v-on:click="pickList" class="v-side-bar-list" :class="{picked: isCurList}">
            {{listName}}
            <div class="v-side-bar-list__close-btn close-btn" v-on:click="removeList">x</div>
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
        },
        removeList: function()
        {
            this.$emit("removed", this.listName);
        }
    }
}
</script>

<style>
    .v-side-bar-list
    {
        color: #fcfcfa;
        background-color: #403e41;
        border: 1px solid #403e41;
        margin-bottom: 10px;
        padding: 5px 20px;
        word-wrap: break-word;
    }

    .v-side-bar-list:hover
    {
        color: rgb(223, 223, 223);
    }

    .v-side-bar-list__close-btn
    {
        position: absolute;
        top: 5px;
        right: 20px;
    }

    .picked
    {
        border-color: #ffd866;
    }

</style>
<template>
    <div class="container">
        <div class="row">
            <div class="v-main-wrapper">
                <div class="col-4 pl-0">
                    <v-side-bar class="v-main-wrapper__item" 
                    :lists="lists" 
                    v-on:listPicked="pickList" 
                    v-on:listRemoved="removeList"></v-side-bar>
                </div>
                <div class="col-8 px-0">
                    <v-todo-list class="v-main-wrapper__item" :list="curList"></v-todo-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vSideBar from "./v-side-bar"
import vTodoList from "./v-todo-list"

export default {
    name: "v-main-wrapper",
    components: {
        vSideBar,
        vTodoList
    },
    data: function() {
        return {
            lists: [],
            curList: {}
        }
    },
    methods: {
        pickList: function (list)
        {
            this.curList.isCurList = false;
            list.isCurList = true;
            this.curList = list;
        },
        removeList: function (listName)
        {
            let list = this.lists.find((list) => {return list.name == listName});
            if (list.isCurList) this.curList = {};
            this.lists = this.lists.filter((list) => {return list.name != listName});
        }
    },
    async mounted() {
        if (!Object.keys(this.$store.getters.info).length) 
        {
            await this.$store.dispatch('fetchInfo')
        }
    }
}
</script>

<style>
    .v-main-wrapper
    {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 600px;
        background-color: #403e41;
        padding: 15px;
        border-radius: 10px;
        color: #939293;
        margin-top: 100px;
    }

    .v-main-wrapper__item
    {
        background-color: #2D2A2E;
        height: 100%;
        padding: 10px;
        border-radius: 10px;
    }

</style>
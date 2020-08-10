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
            this.lists = this.lists.filter((list) => {return list.name != listName});
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
    }

    .v-main-wrapper__item
    {
        background-color: #2D2A2E;
        height: 100%;
        padding: 10px;
        border-radius: 10px;
    }

    input, button
    {
        height: 35px;
        padding: 0 10px;
        border: 1px solid #2d2a2e;
    }

    input:focus, button:focus
    {
        outline: none;
    }

    input
    {
        background-color: #fcfcfa;
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
    }

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
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    }

    .close-btn:hover
    {
        color: rgb(223, 223, 223);
        text-decoration: none;
        cursor: pointer;
    }
</style>
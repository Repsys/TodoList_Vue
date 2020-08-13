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
                <v-popup :popup="this.$store.getters.getCurPopup"/>
            </div>
        </div>
    </div>
</template>

<script>
import vPopup from "./v-popup"
import vSideBar from "./v-side-bar"
import vTodoList from "./v-todo-list"

export default {
    name: "v-main-wrapper",
    components: {
        vPopup,
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
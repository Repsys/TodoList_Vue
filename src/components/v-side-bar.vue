<template>
    <div class="v-side-bar">
        <div class="v-side-bar-lists">
            <v-side-bar-list 
                v-for="(list, index) in lists" :key="index"
                :listName="list.name" 
                :isCurList="list.isCurList"
                v-on:picked="pickList"
                v-on:removed="removeList"/>
        </div>
        <div class="add-new-list">
            <input type="text" v-model="newList.name" class="add-new-list__input">
            <button v-on:click="addNewList" class="add-new-list__btn">Добавить список</button>
        </div>
    </div>
</template>

<script>
import vSideBarList from "./v-side-bar-list"

export default {
    name: "v-side-bar",
    components: {
        vSideBarList
    },
    data: function () {
        return {
            newList: {
                name: "",
                tasks: [],
                isCurList: false
            }
        }
    },
    props: {
        lists: Array
    },
    methods: {
        addNewList: function ()
        {
            if (this.newList.name.trim() === "") 
                console.log("Пустое имя списка");
            else if (this.lists.find((list) => {return list.name == this.newList.name.trim()}))
                console.log("Имя списка занято");
            else {
                this.lists.push(JSON.parse(JSON.stringify(this.newList)));
                this.newList.name = "";
            }
        },
        pickList: function(listName) 
        {
            this.$emit("listPicked", this.lists.find((list) => {return list.name == listName}));
        },
        removeList: function(listName)
        {
            this.$emit("listRemoved", listName);
        }
    }
}
</script>

<style>
    .v-side-bar
    {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .v-side-bar-lists
    {
        overflow-y: auto;
        margin-bottom: 15px;
    }

    .add-new-list__input
    {
        width: 100%;
        margin-bottom: 5px;
    }

    .add-new-list__btn
    {
        width: 100%;
    }

</style>
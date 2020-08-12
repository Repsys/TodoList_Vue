<template>
    <div class="v-side-bar">
        <select class="list-filter" v-model="filter" @change="filterLists()">
            <option>Все</option>
            <option>Исполненные</option>
            <option>Неисполненные</option>
        </select>
        <div class="v-side-bar-lists">
            <v-side-bar-list 
                v-for="(list, index) in lists" :key="index"
                :list="list"
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
            filter: "Все",
            filteredLists: [],
            newList: {
                name: "",
                tasks: [],
                isCurList: false,
                status: "empty",
                isVisible: true
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
                this.$store.commit('setCurPopup', {
                    name: "Имя списка пустое!",
                    isChoice: false,
                    submitText: "ОК",
                    contentText: `Укажите имя списка`
                });
            else if (this.lists.find((list) => {return list.name == this.newList.name.trim()}))
                this.$store.commit('setCurPopup', {
                    name: "Имя списка занято!",
                    isChoice: false,
                    submitText: "ОК",
                    contentText: `Укажите другое имя списка`
                });
            else {
                this.lists.push(JSON.parse(JSON.stringify(this.newList)));
                this.$store.commit('setCurPopup', {
                    name: "Список добавлен",
                    isChoice: false,
                    submitText: "ОК",
                    contentText: `Список "` + this.newList.name + `" добавлен`
                });
                this.pickList(this.newList.name);
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
        },
        filterLists: function()
        {
            if (this.filter == "Все")
                this.lists.map((list) => {list.isVisible = true});
            else if (this.filter == "Исполненные")
                this.lists.map((list) => {
                    if (list.status == "completed") list.isVisible = true
                    else list.isVisible = false});
            else if (this.filter == "Неисполненные")
                this.lists.map((list) => {
                    if (list.status != "completed") list.isVisible = true
                    else list.isVisible = false});
        }
    },
    computed: {
        listsStatuses: function()
        {
            return this.lists.map(list => list.status);
        }
    },
    watch: {
        lists: function()
        {
            this.filterLists();
        },
        listsStatuses: function()
        {
            this.filterLists();
        }
    }
}
</script>

<style>
    .v-side-bar
    {
        display: flex;
        flex-direction: column;
    }
    
    .list-filter
    {
        margin-bottom: 15px;
    }

    .v-side-bar-lists
    {
        overflow-y: auto;
        margin-bottom: 15px;
        height: 100%;
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
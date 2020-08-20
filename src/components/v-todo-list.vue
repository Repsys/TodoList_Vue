<template>
    <div class="v-todo-list">
        <div class="v-todo-list-tasks">
            <v-todo-list-task @completed="completeTask" v-for="(task, index) in list.tasks" :key = "index"
            :task = "task"
            v-on:removed = "removeTask"/>
        </div>
        <div class="add-new-task">
            <input type="text" v-model="newTask.name" class="add-new-task__input">
            <input type="checkbox" v-model="newTask.isImportant" id="add-new-task__isImportant">
            <label for="add-new-task__isImportant">Срочно</label>
            <button v-on:click="addNewTask" class="add-new-task__btn">Добавить задачу</button>
        </div>
    </div>
</template>

<script>
import vTodoListTask from "./v-todo-list-task"
import moment from 'moment'

export default {
    name: "v-todo-list",
    data: function () {
        return {
            newTask: {
                name: "",
                listName: "",
                date: 0,
                isImportant: false,
                isDone: false,
                isCreated: false
            }
        }
    },
    props: {
        list: Object
    },
    components: {
        vTodoListTask
    },
    methods: {
        addNewTask: async function ()
        {
            if (!Object.keys(this.list).length)
                this.$store.commit('setCurPopup', {
                    name: "Список не выбран!",
                    isChoice: false,
                    submitText: "ОК",
                    contentText: `Выберите список`
                });
            else if (this.newTask.name.trim() === "") 
                this.$store.commit('setCurPopup', {
                    name: "Имя задачи пустое!",
                    isChoice: false,
                    submitText: "ОК",
                    contentText: `Укажите имя задачи`
                });
            else if (this.list.tasks.find((task) => {return task.name == this.newTask.name.trim()}))
                this.$store.commit('setCurPopup', {
                    name: "Имя задачи занято!",
                    isChoice: false,
                    submitText: "ОК",
                    contentText: `Укажите другое имя задачи`
                });
            else {
                try {
                    this.newTask.date = moment().format("llll");
                    this.newTask.listName = this.list.name;

                    let updatedList = JSON.parse(JSON.stringify(this.list));
                    updatedList.tasks.push(Object.assign({}, this.newTask));
                    await this.$store.dispatch('updateList', updatedList);

                    this.list = updatedList;
                    this.showCreatePopup(this.newTask.name, this.newTask.listName);
                    this.newTask.name = "";
                    this.newTask.isImportant = false;
                } catch (e) {e}
            }
        },
        removeTask: async function(taskName)
        {
            try {
                let updatedList = JSON.parse(JSON.stringify(this.list));
                updatedList.tasks = this.list.tasks.filter((task) => {return task.name != taskName});
                await this.$store.dispatch('updateList', updatedList);
                this.list = updatedList;
            } catch (e) {e}
        },
        completeTask: async function()
        {
            let updatedList = JSON.parse(JSON.stringify(this.list));
            await this.$store.dispatch('updateList', updatedList);
        },
        showCreatePopup: function (taskName, listName)
        {
            this.$store.commit('setCurPopup', {
                name: "Задача добавлена",
                isChoice: false,
                submitText: "ОК",
                contentText: `Задача "` + taskName + `" добавлена в список "` + listName + `"`
            });
        }
    }
}
</script>

<style>
    .v-todo-list
    {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .v-todo-list-tasks
    {
        overflow-y: auto;
        margin-bottom: 15px;
    }

    .add-new-task
    {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .add-new-task > *
    {
        margin: 0;
    }

    .add-new-task__input
    {
        margin-right: 15px;
    }

    #add-new-task__isImportant
    {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    .add-new-task__btn
    {
        margin-left: 15px;
    }
</style>
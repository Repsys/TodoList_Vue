<template>
    <div class="v-todo-list">
        <div class="v-todo-list-tasks">
            <v-todo-list-task v-for="(task, index) in list.tasks" :key = "index"
            :task = "task"
            v-on:closed = "closeTask"/>
        </div>
        <div class="add-new-task">
            <input type="text" v-model="newTask.name" class="add-new-task__input">
            <input type="checkbox" v-model="newTask.isImportant" id="add-new-task__isImportant">
            <label for="add-new-task__isImportant">Важная</label>
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
                date: 0,
                isImportant: false,
                isDone: false
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
        addNewTask: function ()
        {
            if (!Object.keys(this.list).length)
                console.log("Не выбран список");
            else if (this.newTask.name.trim() === "") 
                console.log("Пустое имя задачи");
            else if (this.list.tasks.find((task) => {return task.name == this.newTask.name.trim()}))
                console.log("Имя задачи занято");
            else {
                this.newTask.date = moment().format("llll");
                this.list.tasks.push(Object.assign({}, this.newTask));
                this.newTask.name = "";
                this.newTask.isImportant = false;
            }
        },
        closeTask: function(taskName)
        {
            this.list.tasks.filter((task) => {return task.name != taskName});
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
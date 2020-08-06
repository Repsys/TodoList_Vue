<template>
    <div class="col-12">
        <div class="v-todo-list-task">
            <input v-model="task.isDone" type="checkbox" class="v-todo-list-task__isDone">
            <h4 class="v-todo-list-task__name">{{task.name}}</h4>
            <div v-if="task.isImportant" class="v-todo-list-task__isImportant"></div>
            <span class="v-todo-list-task__date">{{task.date}}</span>
            <a v-on:click="closeTask" class="v-todo-list-task__close-btn">x</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "v-todo-list-task",
    props: {
        task: Object
    },
    methods: {
        closeTask: function()
        {
            this.$emit("closed", this.task.name);
        }
    }
}
</script>

<style>
    .v-todo-list-task
    {
        display: flex;
        align-items: center;
        padding: 20px 30px;
        border: 1px solid #2d2a2e;
        background-color: #403e41;;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    .v-todo-list-task > *
    {
        margin: 0;
    }

    .v-todo-list-task__close-btn
    {
        position: absolute;
        top: 5px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 15px;
        min-height: 15px;
        width: 20px;
        height: 20px;
        background-color: #4a474b;
        color: #fcfcfa;
        border-radius: 50%;
        
    }

    .v-todo-list-task__close-btn:hover
    {
        color: rgb(223, 223, 223);
        text-decoration: none;
    }

    .v-todo-list-task__isDone
    {
        width: 20px;
        height: 20px;
    }

    .v-todo-list-task__name
    {
        margin-left: 20px;
        color: #fcfcfa;
    }

    .v-todo-list-task__date
    {
        margin-left: auto;
    }

    .v-todo-list-task__isImportant
    {
        background-color: #ff6188;
        border-radius: 50%;
        min-width: 20px;
        min-height: 20px;
        margin-left: 20px;
    }
</style>
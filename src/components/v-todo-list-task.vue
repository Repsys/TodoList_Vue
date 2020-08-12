<template>
    <div class="col-12">
        <div class="v-todo-list-task">
            <div class="col-1">
                <input v-model="task.isDone" type="checkbox" class="v-todo-list-task__isDone">
            </div>
            <div class="col-5">
                <h4 class="v-todo-list-task__name">{{task.name}}</h4>
            </div>
            <div class="col-1">
                <div v-if="task.isImportant" class="v-todo-list-task__isImportant"></div>
            </div>
            <div class="col-5">
                <span class="v-todo-list-task__date">{{task.date}}</span>
            </div>
            <a v-on:click="showRemovePopup" class="v-todo-list-task__close-btn close-btn">x</a>
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
        removeTask: function()
        {
            this.$emit("removed", this.task.name);
        },
        showRemovePopup: function()
        {
            this.$store.commit('setCurPopup', {
                name: "Удалить задачу",
                isChoice: true,
                submitText: "Удалить",
                cancelText: "Отмена",
                contentText: `Удалить задачу  "` + this.task.name + `" ?`,
                submitFunc: this.removeTask
            });
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
        background-color: #403e41;
        border-radius: 10px;
        margin-bottom: 10px;
        word-wrap: break-word;
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
    }

    .v-todo-list-task__isDone
    {
        min-width: 20px;
        min-height: 20px;
    }

    .v-todo-list-task__name
    {
        color: #fcfcfa;
        text-align: start;
    }

    .v-todo-list-task__isImportant
    {
        background-color: #ff6188;
        border-radius: 50%;
        min-width: 20px;
        min-height: 20px;
        max-width: 20px;
        max-height: 20px;
    }

    .v-todo-list-task__date
    {
        
    }
</style>
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
        <v-popup v-if="removePopupIsVisible"
        submitText="Удалить"
        cancelText="Отмена"
        name="Удалить задачу"
        :isChoice="true"
        :contentText='`Удалить задачу  "` + task.name + `" ?`'
        v-on:canceled="closeRemovePopup"
        v-on:submited="removeTask"/>

        <v-popup v-if="createPopupIsVisible"
        submitText="ОК"
        name="Задача добавлена"
        :isChoice="false"
        :contentText='`Задача "` + task.name + `" добавлена в список "` + task.listName + `"`'
        v-on:canceled="closeCreatePopup"
        v-on:submited="closeCreatePopup"/>
    </div>
</template>

<script>
import vPopup from "./v-popup"

export default {
    name: "v-todo-list-task",
    components: {
        vPopup
    },
    props: {
        task: Object,
        createPopupIsVisible: Boolean,
        removePopupIsVisible: Boolean
    },
    methods: {
        removeTask: function()
        {
            this.$emit("removed", this.task.name);
        },
        closeCreatePopup: function()
        {
            this.createPopupIsVisible = false;
        },
        showRemovePopup: function()
        {
            this.removePopupIsVisible = true;
        },
        closeRemovePopup: function()
        {
            this.removePopupIsVisible = false;
        }
    },
    mounted: function ()
    {
        this.createPopupIsVisible = true;
        this.removePopupIsVisible = false;
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
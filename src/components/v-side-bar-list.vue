<template>
    <div class="col-12">
        <div v-on:click="pickList" class="v-side-bar-list" 
        :class="listClass">
            {{list.name}}
            <div class="v-side-bar-list__close-btn close-btn" v-on:click="removeList">x</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "v-side-bar-list",
    props: {
        list: Object
    },
    methods: {
        pickList: function () 
        {
            this.$emit("picked", this.list.name);
        },
        removeList: function()
        {
            this.$emit("removed", this.list.name);
        }
    },
    computed: {
        listClass: function ()
        {
            return {
                'v-side-bar-list_picked': this.list.isCurList,
                'v-side-bar-list_completed': this.list.status == "completed",
                'v-side-bar-list_not-completed': this.list.status == "not-completed",
                'v-side-bar-list_empty': this.list.status == "empty"
            }
        },
        listTasksStatuses: function()
        {
            return this.list.tasks.map(task => task.isDone);
        }
    },
    watch: {
        listTasksStatuses: function()
        {
            if (this.list.tasks.length > 0)
            {
                let listIsCompleted = true;
                for (let task of this.list.tasks)
                {
                    if (!task.isDone)
                    {
                        listIsCompleted = false;
                        break;
                    }
                }
                if (listIsCompleted)
                    this.list.status = "completed"
                else
                    this.list.status = "not-completed"
            }
            else
                this.list.status = "empty";
        }
    }
}
</script>

<style>
    .v-side-bar-list
    {
        color: #fcfcfa;
        background-color: #403e41;
        border: 1px solid #403e41;
        margin-bottom: 10px;
        padding: 5px 20px;
        padding-right: 35px;
        word-wrap: break-word;
        border-left: 15px solid white;
    }

    .v-side-bar-list:hover
    {
        color: rgb(223, 223, 223);
    }

    .v-side-bar-list__close-btn
    {
        position: absolute;
        top: 5px;
        right: 20px;
    }

    .v-side-bar-list_picked
    {
        border-right-color: #ffd866;
        border-top-color: #ffd866;
        border-bottom-color: #ffd866;
    }

    .v-side-bar-list_completed
    {
        border-left-color: rgb(167, 167, 167);
    }

    .v-side-bar-list_not-completed
    {
        border-left-color: rgb(55, 173, 71);
    }

</style>
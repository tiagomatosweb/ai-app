<template>
    <div
        id="app"
        class="wrap"
    >
        <div class="sidebar">
            <div class="sidebar-wrap">
                sd
            </div>
        </div>

        <div class="content">
            sdsd
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
    };
</script>

<style
    lang="scss"
    scoped
>
    .wrap {
        display: flex;
        height: 100vh;
    }

    .sidebar {
        background-color: #eee;
        flex-grow: 0;
        flex-shrink: 0;
        padding: 15px;
        width: 250px;
    }

    .content {
        flex-grow: 1;
        flex-shrink: 1;
        padding: 15px;
        width: calc(100% - 30px);
    }
</style>

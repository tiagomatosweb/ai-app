<template>
    <div
        id="app"
        class="wrap"
    >
        <TheSidebar />

        <div class="content">
            <Map />
        </div>
    </div>
</template>

<script>
    import TheSidebar from '@/components/TheSidebar';
    import Map from '@/components/Map';

    export default {
        name: 'App',

        components: {
            Map,
            TheSidebar,
        },
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

    .content {
        flex-grow: 1;
        flex-shrink: 1;
        padding: 15px;
        width: calc(100% - 30px);
    }
</style>

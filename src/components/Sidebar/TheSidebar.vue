<template>
    <div class="sidebar">
        <div class="sidebar-wrap">
            <SidebarTypeFilter />

            <SidebarStageFilter />
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import SidebarTypeFilter from '@/components/Sidebar/SidebarTypeFilter';
    import SidebarStageFilter from '@/components/Sidebar/SidebarStageFilter';

    export default {
        name: 'TheSidebar',

        components: {
            SidebarTypeFilter,
            SidebarStageFilter,
        },

        data() {
            return {
            };
        },

        computed: {
            ...mapState({
                map: state => state.map,
            }),
        },

        methods: {},
    };
</script>

<style
    lang="scss"
    scoped
>
    .sidebar {
        background-color: #eee;
        flex-grow: 0;
        flex-shrink: 0;
        padding: 20px;
        width: 250px;
    }
</style>

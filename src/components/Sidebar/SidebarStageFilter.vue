<template>
    <div class="mb-3">
        <label for="stage">Stage</label>
        <BFormSelect
            id="stage"
            v-model="selected"
            :options="options"
        />
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'SidebarStageFilter',

        data() {
            return {
                options: [],
            };
        },

        computed: {
            ...mapState({
                geoJsonData: state => state.map.geoJsonData,
                filterStage: state => state.map.filters.stage,
            }),

            selected: {
                get() {
                    return this.filterStage;
                },

                set(vl) {
                    this.SET_FILTER({ key: 'stage', value: vl });
                },
            },
        },

        created() {
            this.buildOptions();
        },

        methods: {
            ...mapMutations('map', ['SET_FILTER']),

            buildOptions() {
                let opt = this.geoJsonData.features.map(o => {
                    return o.properties.project.Stage;
                });

                opt = [...new Set(opt)].map(o => {
                    return {
                        value: o,
                        text: o,
                    };
                });

                opt.unshift({ value: null, text: 'Select stage' });

                this.options = opt;
            },
        },
    };
</script>

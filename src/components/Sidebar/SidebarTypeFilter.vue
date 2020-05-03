<template>
    <div class="mb-3">
        <label for="type">Type</label>
        <BFormSelect
            id="type"
            v-model="selected"
            :options="options"
        />
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'SidebarTypeFilter',

        data() {
            return {
                options: [],
            };
        },

        computed: {
            ...mapState({
                geoJsonData: state => state.map.geoJsonData,
                filterType: state => state.map.filters.type,
            }),

            selected: {
                get() {
                    return this.filterType;
                },

                set(vl) {
                    this.SET_FILTER({ key: 'type', value: vl });
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
                    return o.properties.project.Type;
                });

                opt = [...new Set(opt)].map(o => {
                    return {
                        value: o,
                        text: o,
                    };
                });

                opt.unshift({ value: null, text: 'Select type' });

                this.options = opt;
            },
        },
    };
</script>

<template>
    <div class="map">
        <MglMap
            :access-token="accessToken"
            :map-style="mapStyle"
            :center="initialCoordinates"
            :zoom="initialZoom"
        >
            <MglNavigationControl position="top-right" />
            <MglGeolocateControl position="top-right" />

            <MglGeojsonLayer
                source-id="points"
                :source="geoJsonSource"
                layer-id="points"
                :layer="geoJsonLayer"
            />
        </MglMap>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import Mapbox from 'mapbox-gl';
    import { MglMap, MglNavigationControl, MglGeolocateControl, MglGeojsonLayer } from 'vue-mapbox';

    export default {
        name: 'Map',

        components: {
            MglMap,
            MglNavigationControl,
            MglGeolocateControl,
            MglGeojsonLayer,
        },

        data() {
            return {
                mapbox: null,
                accessToken: process.env.VUE_APP_MAPBOX_API_KEY,
                mapStyle: process.env.VUE_APP_MAPBOX_MAP_STYLE,
                initialCoordinates: [151.2093, -33.8688],
                initialZoom: 15,
                geoJsonSource: {
                    type: 'geojson',
                    data: null,
                },
                geoJsonLayer: {
                    'id': 'points',
                    'type': 'circle',
                    'source': 'points',
                    'paint': {
                        'circle-color': '#9F7AEA',
                        'circle-stroke-color': '#805AD5',
                        'circle-stroke-width': 2,
                        'circle-radius': 6,
                    },
                },
            };
        },

        computed: {
            ...mapState({
                geoJsonData: state => state.map.geoJsonData,
                filters: state => state.map.filters,
            }),
        },

        watch: {
            filters: {
                handler() {
                    this.onFilterChange();
                },
                deep: true,
            },
        },

        created() {
            this.mapbox = Mapbox;
            this.geoJsonSource.data = JSON.parse(JSON.stringify(this.geoJsonData));
        },

        methods: {
            onFilterChange() {
                const features = JSON.parse(JSON.stringify(this.geoJsonData.features));

                this.geoJsonSource.data.features = features.filter(o => {
                    return (!this.filters.type || o.properties.project.Type === this.filters.type) &&
                        (!this.filters.stage || o.properties.project.Stage === this.filters.stage);
                });
            },
        },
    };
</script>

<style
    lang="scss"
    scoped
>
    .map {
        height: 100vh;
        width: 100%;
    }
</style>

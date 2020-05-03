import GEO_JSON from '../../testBlob';

const state = () => ({
    geoJsonData: GEO_JSON,
    filters: {
        type: null,
        stage: null,
    },
});

const mutations = {
    SET_FILTER(state, data) {
        if (!data.key) { return; }
        state.filters[data.key] = data.value;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
};

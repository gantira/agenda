export const state = () => ({
    agendas: [],
})

export const getters = {
    agendas(state) {
        return state.agendas
    },
}

export const mutations = {
    ADD(state, agendas) {
        state.agendas.push({
            event: agendas.event,
            tanggal: agendas.tanggal,
            keterangan: agendas.keterangan,
        })
    },

    DELETE(state, id) {
        let index = state.agendas.findIndex(item => item.id == id)
        state.agendas.splice(index, 1)
    },

    TOGGLE(state, payload) {
        let index = state.agendas.findIndex(item => item.id == id)

        payload.toggle = !payload.toggle
    }
}

export const actions = {
    async add({ commit }, agendas) {
        commit('ADD', agendas)
    },
    async delete({ commit }, agendas) {
        commit('DELETE', agendas)
    },

    edit({ commit }, agendas) {
        commit('TOGGLE', agendas)
    },

}

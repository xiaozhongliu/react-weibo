import API from '../api'

export default {
    namespace: 'timeline',

    state: {
        list: [],
        page: null,
    },

    reducers: {
        save(state, { payload: { data: list, page } }) {
            return { ...state, list, page }
        },
    },

    effects: {
        *fetch({ payload: { page = 1 } }, { call, put }) {
            const { data } = yield call(API.getTimelines, { page })
            yield put({
                type: 'save',
                payload: {
                    data,
                    page,
                },
            })
        },
    },
}
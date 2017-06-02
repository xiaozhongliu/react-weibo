import { routerRedux } from 'dva/router'
import API from '../api'

export default {
    namespace: 'timeline',

    state: {
        list: [],
        page: 1,
    },

    reducers: {
        save(state, { payload }) {
            state.page = payload.page
            state.list.update(payload.list)
            return state
        },
    },

    effects: {
        *fetch({ payload: { type = 'public', page = 1 } }, { put }) {
            const res = yield API.getTimelines(type, page)
            if (res.code === 10001) {
                yield put(routerRedux.push('login'))
                return
            }
            yield put({
                type: 'save',
                payload: {
                    list: res.statuses,
                    page,
                },
            })
        },
    },
}
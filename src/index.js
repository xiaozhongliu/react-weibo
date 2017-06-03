import dva from 'dva'
import { browserHistory } from 'dva/router'
import createLoading from 'dva-loading'
import router from './router'
import './config'
import './util/extension'
import './asset/style/index.css'

// 1. Initialize
const app = dva({
    history: browserHistory,
    onError(e) {
        console.log(e.message)
    },
})

// 2. Plugins
app.use(createLoading())

// 3. Model
// moved to router.js

// 4. Router
app.router(router)

// 5. Start
app.start('#root')
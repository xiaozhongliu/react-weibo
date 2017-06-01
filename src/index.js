import dva from 'dva'
import { browserHistory } from 'dva/router'
import createLoading from 'dva-loading'
import router from './router'
import './config'

const app = dva({
    history: browserHistory
})

// 2. Plugins
app.use(createLoading())

// 3. Model
// Moved to router.js

// 4. Router
app.router(router)

// 5. Start
app.start('#root')
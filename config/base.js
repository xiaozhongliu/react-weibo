module.exports = {

    APP_NAME: 'react-weibo',

    // security
    REQUEST_TOKEN: '!re9ue$t~T0KEN-re@ct_weib0',
    HASH_SECRET: '!h@sh~$ECRET',

    // log
    API_LOG_PATH: `${__dirname}/../log/`,
    TASK_LOG_PATH: `${__dirname}/../log/task/`,

    // no auth stuffs
    NO_AUTH_REG: /\.log$|\.ico$/,
    NO_AUTH_PATHS: [
        '/',
        '/login',
        '/register'
    ],

    // http auth on logs
    HTTP_AUTH: {
        USERNAME: 'viewer',
        PASSWORD: '1234Abcd',
        ITEMS_REG: /\.log$/,
    },

    // inteface params validation
    VALIDATION: {
        pwdFormat: /^[a-f0-9]{32}$/i, //MD5 hash format
    },
}
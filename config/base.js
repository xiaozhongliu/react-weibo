module.exports = {

    APP_NAME: 'react-weibo',

    // security
    REQUEST_TOKEN: '!re9ue$t~T0KEN-re@ct_weib0',
    HASH_SECRET: '!h@sh~$ECRET',
    SESSION_SECRET: '^u-Dont-KNOW$',

    REDIS: {
        HOST: '127.0.0.1',
        PORT: 6379,
        PASS: '123qweASD',
    },

    // log
    API_LOG_PATH: `${__dirname}/../log/`,
    TASK_LOG_PATH: `${__dirname}/../log/task/`,

    // no auth stuffs
    NO_AUTH_REG: /\.log$|\.ico$/,
    NO_AUTH_PATHS: [
        '/monitor',
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

    // weibo
    APP_KEY: '242299217',
    APP_SECRET: 'f87e10f774d412cfecf2a7c2e98d3c05',
}
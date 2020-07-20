import './configEnv';

export default {
    server: {
        host: 'localhost',
        protocol: 'http',
        debug: true,
        port: process.env.PORT || 3000,
        uiHost: 'http://localhost:' + process.env.PORT,
        version: 'v1',
    },
    database: {
        mongo: process.env.MONGOLOCAL_URI,
        defaultPageSize: 20,
    },
    token: {
        secret: process.env.TOKEN_SECRET,
    },
    session: {
        secret: process.env.SESSION_SECRET,
    }
}
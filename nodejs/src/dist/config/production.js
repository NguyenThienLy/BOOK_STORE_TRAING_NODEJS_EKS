"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./configEnv");
exports.default = {
    server: {
        host: 'localhost',
        protocol: 'http',
        debug: false,
        port: process.env.PORT || 3000,
        uiHost: 'http://localhost:' + process.env.PORT,
        version: 'v1',
    },
    database: {
        mongo: process.env.MONGOLAB_URI,
        defaultPageSize: 50
    },
    token: {
        secret: process.env.TOKEN_SECRET,
        checkinSecret: process.env.CHECKIN_SECRET
    },
    session: {
        secret: process.env.SESSION_SECRET,
    },
    mail: {
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
};
//# sourceMappingURL=production.js.map
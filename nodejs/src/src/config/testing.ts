import './configEnv';
import { MongoMemoryServer } from 'mongodb-memory-server';

let getUrlMongoMemory = async () => {
    const mongoServer = new MongoMemoryServer({
        instance: {
            dbName: '3_Idiots_test_memoryMongo',
            port: 8001
        },
        binary: {
            version: '4.0.3'
        },
        autoStart: false
    });

    return await mongoServer.getUri();
}

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
        defaultPageSize: 50,
    },
    token: {
        secret: process.env.TOKEN_SECRET,
    },
    session: {
        secret: process.env.SESSION_SECRET,
    }
}
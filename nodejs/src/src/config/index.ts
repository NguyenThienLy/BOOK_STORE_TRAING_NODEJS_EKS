import './configEnv';
import production from './production';
import development from './development';
import testing from './testing';

function getConfig(environment: string) {
    if (environment === 'development') {
        return development;
    } else if (environment === 'production') {
        return production;
    } else if (environment === 'testing') {
        return testing;
    } else {
        return development;
    }
}

export const config = getConfig(process.env.NODE_ENV || "development");
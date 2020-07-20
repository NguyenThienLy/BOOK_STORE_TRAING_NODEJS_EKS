import { AuthInfoMiddleware } from './auth';
import { QueryInfoMiddleware } from './query';
import { BlockMiddleware } from './block';
import { GoogleOAuthMiddleware } from './googleOauth';
import { SetCookieMiddleware } from './setCookie';
import { AuthSessionMiddleware } from './authSession';
import { MulterMiddleware } from './multer';

const authInfoMiddleware = new AuthInfoMiddleware();
const queryInfoMiddleware = new QueryInfoMiddleware();
const blockMiddleware = new BlockMiddleware();
const googleOAuthMiddleware = new GoogleOAuthMiddleware();
const setCookieMiddleware = new SetCookieMiddleware();
const authSessionMiddleware = new AuthSessionMiddleware();
const multerMiddleware = new MulterMiddleware();

export {
    authInfoMiddleware,
    queryInfoMiddleware,
    blockMiddleware,
    googleOAuthMiddleware,
    setCookieMiddleware,
    authSessionMiddleware,
    multerMiddleware
}
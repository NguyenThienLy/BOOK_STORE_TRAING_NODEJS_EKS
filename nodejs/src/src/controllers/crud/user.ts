import { CrudController } from '../crud';
import { ICrudOption } from '../../services';
import {
    DJContainer,
    UserService,
    InvalidTokenService,
    IErrorService,
    ITokenService
} from '../../services';
import { TYPES } from '../../types';

export class UserController extends CrudController<any>{
    constructor() {
        super(DJContainer.get<UserService>(TYPES.UserService));
    }

    async login(params: {
        email: string
        password: string
    }) {
        const { email, password } = params;

        const item = await DJContainer.get<UserService>(TYPES.UserService).getItem({
            filter: {
                email: email
            }
        })

        const isMatch = await item.comparePassword(password);

        if (!isMatch) throw DJContainer.get<IErrorService>(TYPES.IErrorService).user.loginFail();

        const options: object = {
            issuer: '',
            subject: '',
            audience: "http://localhost:4200",
            expiresIn: '1d',
            algorithm: 'RS256'
        };

        const payload: object = {
            _id: item._id,
            role: item.role
        }

        const token = await DJContainer.get<ITokenService>(TYPES.ITokenService).sign(payload, options);
        //res.cookie("token", `bearer ${token}`, { secure: false, maxAge: 10 * 60 * 1000 });

        return {
            _id: item._id,
            fullName: item.fullName,
            email: item.email,
            avatar: item.avatar,
            token: token
        };
    }

    async logout(params: any , option?: ICrudOption) {
        const item = await DJContainer.get<InvalidTokenService>(TYPES.InvalidTokenService).create(params, option);
        //res.cookie("token", undefined, { secure: false });

        return item;
    }
}
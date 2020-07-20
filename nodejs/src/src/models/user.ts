import * as mongoose from 'mongoose';
import { BaseModel } from './base';
import * as bcrypt from 'bcryptjs';
import { TYPES } from '../types';
import { DJContainer, IUtilService } from '../services';

const SALT_WORK_FACTOR = 10

const Schema = mongoose.Schema;

export type UserModel = BaseModel & {
    fullName: string
    role: string
    gender: string
    address: string
    email: string
    avatar: string
    password: string
}

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        default: "male"
    },
    address: {
        type: String,
        default: "HCMC, Viet Nam"
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    avatar: {
        type: String,
        default: "https://avatars3.githubusercontent.com/u/39694887?s=400&u=2f419055c0d22305e3417363b6d0d28d802e305a&v=4"
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    collection: 'user'
})

userSchema.pre('save', function (next) {
    var user = this as UserModel;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.pre('findOneAndUpdate', async function (next) {
    const dataUpdate = this.getUpdate()

    if (dataUpdate.password) {
        const hash = await DJContainer.get<IUtilService>(TYPES.IUtilService).hashPassword(dataUpdate.password)
        this.update({}, { password: hash })
    }
    next()
});

userSchema.methods.comparePassword = async function (candidatePassword: string) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
            if (err) reject(err)
            resolve(isMatch)
        })
    })
};

export let User: mongoose.Model<UserModel> = mongoose.model('User', userSchema);



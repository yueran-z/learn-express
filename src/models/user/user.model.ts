import mongoose from 'mongoose';
import {
    UserSchema
} from './user.schema';
// mongoose.model第一个参数为 Collection 的名称，第二个为 Schema
export const UserModel = mongoose.model('User', UserSchema);
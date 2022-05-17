import mongoose from 'mongoose';
import {
    UserSchema
} from './user.schema';
// mongoose.model 第一個參數為 Collection 的名稱，第二個為 Schema
export const UserModel = mongoose.model('User', UserSchema);
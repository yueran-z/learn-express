import mongoose from 'mongoose';
import {EmailValidator} from '../../validators'

export const UserSchema = new mongoose.Schema({
    {
        username:{
            type: String,
            required: true
        }
    }
})
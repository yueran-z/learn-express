import mongoose from 'mongoose';
import { EmailValidator } from '../../validators';

// Schema 的设置是透过 Object 设定并带入 产生实例
export const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 16
        },
        email: {
            type: String,
            required: true,
            validate: {
                validator: EmailValidator
            }
        }
    }
);
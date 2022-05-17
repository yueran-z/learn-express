import mongoose from 'mongoose';
import { EmailValidator } from '../../validators';

// Schema 的设置是透过 Object 设定并带入 产生实例
export const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 16,
            default: ""
        },
        email: {
            type: String,
            required: true,
            default: "",
            validate: {
                validator: EmailValidator
            }
        }
    }
);
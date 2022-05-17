import mongoose from 'mongoose';

const DB_CONNECTION_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
export const Database ={
    connect:() =>{
        mongoose.connect();
    }
}
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

const app = express();

// 动态选择环境变数的档案
dotenv.config({ path: path.resolve(__dirname, `./environments/${process.env.NODE_ENV}.env`) });

app.get('/', (req, res, next) => {
    res.send('Hello, World!!');
});

app.listen(process.env.PORT, () => console.log(`http server is running at port ${process.env.PORT}.`));
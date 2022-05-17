import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import appRoute from './app/app.routing';
import cors from 'cors';
import helmet from 'helmet';
import { Database } from './database';
import { Request, Response, NextFunction } from 'express';

const app = express();

dotenv.config({ path: path.resolve(__dirname, `./environments/${process.env.NODE_ENV}.env`) });

app.get('/', (req, res, next) => {
    res.send('Hello, World!!');
});

app.use('/', appRoute);
// 全域
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    res.status(500).json({ message: err.message || err });
});
app.use(cors());
app.use(helmet());
app.use(helmet.ieNoOpen());
app.use(
    helmet.permittedCrossDomainPolicies({
        permittedPolicies: "by-content-type",
    })
);
app.use(helmet.hidePoweredBy());
Database.connect();



app.listen(process.env.PORT, () => console.log(`http server is running at port ${process.env.PORT}.`));
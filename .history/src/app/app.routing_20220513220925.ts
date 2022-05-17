import express from 'express';
import { Request, Response, NextFunction } from 'express';
import {UserModel} from '../../'
const router = express.Router();

const errorHandler = (func: (req: Request, res: Response, next: NextFunction) => Promise<void>) => (req: Request, res: Response, next: NextFunction) => func(req, res, next).catch(next);

// 实作 CRUD
router.post('/user', express.json(), errorHandler(async (req, res, next) => {
    const { username, email } = req.body;
    const user = new UserModel({ username, email });
    const data = await user.save();
    res.send(data);
}));

router.get('/users', errorHandler(async (req, res, next) => {
    const documents = await UserModel.find({ username: req.query.username });
    res.send(documents);
}));

// 更新(Update)
router.patch('/users/:id', express.json(), errorHandler(async (req, res, next) => {
    await UserModel.updateOne({ _id: req.params.id }, { username: req.body.username }, { runValidators: true });
    res.send('成功');
}));

//刪除 (Delete)
router.delete('/users/:id', errorHandler(async (req, res, next) => {
    await UserModel.findByIdAndRemove(req.params.id);
    res.send('刪除成功');
}));


router.get('/test', (req, res, next) => {
    res.send('test!');
});


router.post('/test', express.json(), (req, res, next) => {
    res.send(JSON.stringify(req.body));
});


export default router;


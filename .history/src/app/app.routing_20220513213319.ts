import express from 'express';
const router = express.Router();

// const errorHandler = (func: (req: Request, res: Response, next: NextFunction) => Promise<void>) => (req: Request, res: Response, next: NextFunction) => func(req, res, next).catch(next);

// router.get('/data/error/promise', errorHandler(async (req, res, next) => {
//     // Fake API
//     const getProfile = new Promise((resolve, reject) => {
//         setTimeout(() => resolve({ name: 'HAO', age: 22 }), 100);
//     });
//     const getFriends = new Promise((resolve, reject) => {
//         setTimeout(() => resolve([]), 120);
//     });
//     const errorRequest = new Promise((resolve, reject) => {
//         setTimeout(() => reject('Oops!'), 2000);
//     });

//     const profile = await getProfile;
//     const friends = await getFriends;
//     const none = await errorRequest;
//     res.send('GoGoGo!');
// }));

router.post('/user', express.json(), errorHandler(async (req, res, next) => {
    const { username, email } = req.body;
    const user = new UserModel({ username, email });
    const data = await user.save();
    res.send(data);
}));
router.get('/test', (req, res, next) => {
    res.send('test!');
});


router.post('/test', express.json(), (req, res, next) => {
    res.send(JSON.stringify(req.body));
});


export default router;


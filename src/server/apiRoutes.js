import {
    Router
} from 'express';

//call controllers
import UserController from './controllers/UserController';

const app = Router();

app.get('/', (req, res) => {    
  res.status(200).json({ message: 'Connected!' });
});


app.use('/users', UserController);

export default app;

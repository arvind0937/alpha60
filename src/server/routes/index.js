import {
    Router
} from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    console.log('sadasd');
    
  res.status(200).json({ message: 'Connected!' });
});

export default routes;

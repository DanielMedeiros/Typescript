import * as express from 'express';
import NewsController from '../controller/newsController';

const newsRouter = express.Router();

newsRouter.route('/api/v1/news').get(NewsController.get);
newsRouter.route('/api/v1/news/:id').get(NewsController.getById);
newsRouter.route('/api/v1/news').post(NewsController.create);
newsRouter.route('/api/v1/news/:id').put( NewsController.update);
newsRouter.route('/api/v1/news/:id').delete(NewsController.delete);
newsRouter.route('/api/v1/news/export/tocsv').get(NewsController.exportToCsv);

export default newsRouter;
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';

import DB from './infra/db';
import Auth from './infra/auth';
import uploads from './infra/upload';
import newsRouter from './router/newsRouters';

class startUp{
    public app: express.Application;    
    private _db: DB;

    /**
     *
     */
    constructor() {
        this.app = express();  
        this._db = new DB;
        this._db.createConnection();
        this.middler();
        this.routes();      
        
    }

    middler(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(compression());
        this.app.use('/exports', express.static(process.cwd() + '/exports'));
    }

    routes(){
        
        this.app.route('/').get((req,res)=>{
            res.send({
                versao: '0.0.1'
            })
        })

        this.app.route('/uploads').post(uploads.single('file'),(req,res)=>{
            try {
                res.send('Arquivo enviado com sucesso!!');
            } catch (error) {
                console.log(error);
            }
        })

        this.app.use(Auth.validate); 

        this.app.use('/', newsRouter);

     
    }

    


}

export default new startUp();
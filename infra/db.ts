import * as mongoose from 'mongoose';

class DB{
    //Usar para rodar local
    private DB_URL = 'mongodb://localhost:27017/db_portal';
    
    //docker
    //private DB_URL = 'mongodb://link-db/db_portal';

    createConnection(){
        mongoose.connect(this.DB_URL);
    }
}

export default DB;
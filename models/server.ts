
import express from 'express';
import userRoutes from '../routes/user';
import cors from 'cors';

class Server{

    private app:express.Application;
    private port:string;
    private apiPaths={
        users:'/api/users'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        //Middlewares
        this.middlewares();

        // definir mis rutas
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        //Lectura del body
        this.app.use(express.json());
        //Carpeta publica
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.users, userRoutes)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }
}

export default Server;
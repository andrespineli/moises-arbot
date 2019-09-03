import express from 'express';
import routes from './routes';

class App {

    constructor() {
        this.init();
    }

    init() {
        this.app = express();
        this.router();
        this.error();
    }

    server() {
        this.app.listen(4000);
    }

    router() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(routes);
    }

    error() {
        this.app.use(function (err, req, res, next) {
            console.log(err);

            let code = err.code ? err.code : 500;
            
            res.status(code).json({
                "code": code,
                "message": err.message
            });
        });
    }
}

export default new App;
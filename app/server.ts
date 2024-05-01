import express, {Request, Response, NextFunction } from 'express';
import { routes } from './routes';
import { AppError } from './errors/AppError';

const app = express();

app.use(express.json());
app.use(routes);
app.use((err:Error, req:Request, res:Response, next: NextFunction)=>{
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message
        })
    }

    console.log(err);

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    }) 
});

app.listen(8000, ()=>{
    console.log('Server is running on port 8000');
}); 
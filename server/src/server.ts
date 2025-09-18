import express, {type Request, type Response} from 'express';

const app = express();
app.use(express.json());
const PORT = 8080

app.get('/', (req:Request, res:Response) => {
    res.send('Hiii')
});

app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
});
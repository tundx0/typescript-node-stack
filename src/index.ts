import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));

app.get('/', (req,res) => {
    res.json({
        hello: 'Alex'
    });
});
const port = Number(process.env.PORT || 3333);
app.listen(port, '0.0.0.0', () => {
    console.log(`Server started at http://localhost:${port}`)
});
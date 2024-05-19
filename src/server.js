import express from "express";
import appRoutes from './routes';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/v1', appRoutes);



app.listen(port, () => {
    console.log(`listening to http://localhost:${port}`)
})
import express from "express";
import { StatusCodes } from "http-status-codes";
const router = express.Router();


router.get('/', (req, res ) => {
    res.status(StatusCodes.OK).send('Hello to Node')
})


router.post('/add', (req, res) => {
    const { body } = req;
    const data = [];
    data.push(body);
    res.status(StatusCodes.CREATED).send(data);
})


export default router;
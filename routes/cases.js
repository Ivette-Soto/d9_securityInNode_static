import { Router } from 'express';
import { cases } from '../data/cases.js';
import { Authorization } from '../middlewares/authorization.js';

const router = Router()

router.get("/", async (req, res) => {
    res.json(cases)

})

export {router}
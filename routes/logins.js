// validate agents credentials
// give JWT signed when ceredentials are correct

import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { agents } from '../data/agents.js'

const router = Router()

// F.E.  sends credentials to body   {emial: 'string', password: 'string'}
router.post("/", async (req, res) => {
    const { email, password } = req.body
// verify existence of agent and right credentials
    const isAgent = agents.some(agents => agents.email == email && agents.password == password)
    const secret = process.env.JWT_SECRET

    if (isAgent) {
        const token = jwt.sign({ email: email }, secret, { expiresIn: 120 })

        res.json({
            html: `
            <h1>Welcome</h1>
            <h2>${email}</h2>
            <a href="/cases">See Cases</a>
            `,
            token: token
        })
    }
        else {
            res.status(401).send({
                error: "401 🔎 Unauthorized 💥",
                message: err.message,
            })
        }
})


export {router}
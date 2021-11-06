import express from 'express'
const router = express.Router();

router.get('/login', (req, res, next) => res.json({ data: "login come" }))

export default router
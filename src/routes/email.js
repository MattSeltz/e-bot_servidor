import { Router } from "express";

import {postData} from "../controllers/email.js"

const router = Router()

router.post("/", postData)

export default router
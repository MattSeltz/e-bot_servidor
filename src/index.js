import express from "express"
import cors from "cors"

import { PORT } from "./configs/configs.js"

import emailRouter from "./routes/email.js"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send(`<h1>E-BOT Api</h1>`)
})

app.use("/email", emailRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
import express from 'express'
import cors from "cors"

import 'dotenv/config'
import cookieParser from "cookie-parser"
import connectDB from './config/db.js'
import User from './models/User.js'
import authRoutes from './routes/authRoutes.js'
const app = express()

const port = process.env.PORT || 4000;
connectDB()
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// API routes
app.use('/api/auth',authRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://profile-complete.onrender.com/"
    ], credentials: true
}));
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

export default app
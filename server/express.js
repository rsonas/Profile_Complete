import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://profile-complete-1.onrender.com"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

export default app
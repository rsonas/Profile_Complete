import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://profile-react-jvg1.onrender.com"
    ]
}));
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

export default app
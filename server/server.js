import 'dotenv/config'
import config from './config/config.js'
import app from './express.js'
import mongoose from 'mongoose'
import referenceRoutes from "./routes/references.routes.js"
import projectRoutes from "./routes/projects.routes.js"
import serviceRoutes from "./routes/services.routes.js"
import userRoutes from "./routes/users.routes.js"

mongoose.connect(config.mongoUri)
    .then(() => console.log("Connected to database"))

mongoose.connection.on('error', () => {
    throw new Error(`Unable to connect to database: ${config.mongoUri}`)
})

// routes
app.use("/api/references", referenceRoutes)
app.use("/api/projects", projectRoutes)
app.use("/api/services", serviceRoutes)
app.use("/api/users", userRoutes)


app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message
    });
});


app.get("/", (req, res) => {
    res.json({ message: "Welcome to user application." })
})

app.listen(config.port, () => {
    console.info('Server started on port %s.', config.port)
})


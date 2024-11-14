import express from 'express'
import userRoutes from './routes/userRoutes.js'
import sequelize from './config/database.js'

const app = express()
app.use(express.json())

app.use('/',(req,res) => {
    res.send("Hola mundo")
})

app.use('/api/users', userRoutes);

sequelize.sync().then(() =>{
    console.log('Database synchronized');
}).catch((error) => {
    console.error('Error synchronizing database:', error)
});

export default app;
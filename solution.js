import express from 'express';
import fs from 'fs';
import { promisify } from 'util';
const app = express()
const writeFile = promisify(fs.writeFile);

const loggingMiddleware = async (req, res, next) => {
    const entry = ` \n ${new Date().toISOString()}: ${req.originalUrl}`;
    await writeFile("./log.txt", entry, { flag: "a" });
    next();
}

app.use(loggingMiddleware)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/users', (req, res) => {
    res.send('Users Page')
})
app.get('/contact', (req, res) => {
    res.send('Contact Page')
})


app.listen(3000, () => console.log('Server Started'))
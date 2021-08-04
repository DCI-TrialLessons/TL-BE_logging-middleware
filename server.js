import express from 'express';
// Hier musst du wahrscheinlich noch sachen importieren damit du Dateien schreiben kannst. 

const app = express();

const loggingMiddleware = async (req, res, next) => {
    // Hier fehlt Code
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
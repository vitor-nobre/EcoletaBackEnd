import express from 'express';

const app = express();



app.get('/users', (request, response) => {
    console.log('Test')

    response.json({ message:'Test'})
})

app.listen(3333)
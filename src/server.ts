import express from 'express';
import { errors } from 'celebrate'
import cors from 'cors'
import routes from './routes'
import path from 'path'

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())
app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads')))

app.listen(3333,'https://ecoleta-back-end.herokuapp.com')

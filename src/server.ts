import express, { request, response } from 'express';
import { errors } from 'celebrate'
import cors from 'cors'
import routes from './routes'
import path from 'path'
import host from './config/host'

const app = express();
var porta = process.env.PORT || 8080;
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())
app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads')))

app.listen(3333,host)

app.listen(porta)
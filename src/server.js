import express from 'express'
import fileUpload from 'express-fileupload'
import morgan from 'morgan'
import cors from 'cors'
import  { resolve } from 'path'

import { PORT, accessLogStream } from './config.js'
import userRouter from './routers/user.router.js'
import errorHandler from './middlewares/errorHandler.js'
import adminRouter from "./routers/admin.router.js"
import swaggerRouter from './swagger.js'
const app = express() 
 

app.use(cors())
app.use(express.static(resolve("uploads")));
app.use(express.json())
app.use(fileUpload());
app.use(morgan("combined", {skip: function (req,res){return res.statusCode < 400},  stream: accessLogStream }));

app.use(userRouter)
app.use(adminRouter)
app.use(swaggerRouter)

app.use(errorHandler)


app.listen(PORT, () => console.log('server is runing'))

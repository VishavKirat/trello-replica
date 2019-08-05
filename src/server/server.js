import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import path from 'path'
import morgan from 'morgan'
import mongoose from 'mongoose'
import router  from './Routes'


const app = express();
dotenv.config({path:path.resolve(__dirname,'../../variables.env')})



app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json(),
    morgan('common')
)

app.use('/api',router);
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'../../src/app')))


mongoose.connect(process.env.DATABASE,{useNewUrlParser:true});
mongoose.Promise = global.Promise
mongoose.connection.once('open',function(response){
                        console.log(`Database : ${process.env.DATABASE}`)
                    })
                    .on('error',(error)=> console.log(error))



app.listen(process.env.PORT,()=>{
    console.log(`You are listening to PORT ${process.env.PORT}` )
})


